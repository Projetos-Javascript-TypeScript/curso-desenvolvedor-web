const mongoose = require("mongoose");
const { Schema } = mongoose;


mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo")
.then(() => {
    console.log("mongo connection suceeded");
}) 
.catch( (err) => {
    console.log("MONGO ERROR");
    console.log(err);
})

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]
})

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

const makeFarm = async () => {
    const farm = new Farm({name: "Full Belly Farms", city: "Guinda, CA"});
    const melon = await Product.findOne({name: "Goddess Melon"});
    farm.products.push(melon);
    farm.save();
    console.log(farm);
}
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name: "Full Belly Farms"});
    const watermelon = await Product.findOne({name: "Sugar Baby Watermelon"})
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}
// addProduct();

Farm.findOne({name: "Full Belly Farms"})
.populate("products")
.then(farm => console.log(farm)); 



// Product.insertMany([
//     {name: "Goddess Melon", price: 4.99, season: "Summer"},
//     {name: "Sugar Baby Watermelon", price: 5.99, season: "Summer"},
//     {name: "Asparagus", price: 3.99, season: "Spring"}
// ]);