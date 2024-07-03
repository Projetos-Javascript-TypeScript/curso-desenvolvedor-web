const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const { v4: uuid } = require('uuid');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments", (req,res) => {
    res.render("comments/index", {comments});
});

app.get("/comments/new", (req,res) => {
    res.render("comments/new");
});

app.post("/comments", (req,res)=> {
    // console.log(req.body)
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid() });
    // res.send("IT WORKED!");
    res.redirect("/comments");
})

app.get("/comments/:id", (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", {comment});
})

app.get("/comments/:id/edit", (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})

app.patch("/comments/:id", (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    //o find por algum motivo ele associa a nova constante, o endereço da memoria da constante original, entao vc n precisa
    //editar o array comments original pois ele ja vai fazer isso por ter o mesmo endereço
    foundComment.comment = newCommentText;
    res.redirect("/comments");

})

app.delete("/comments/:id", (req,res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos");
})

app.post("/tacos", (req, res) => {
    const {meat, qty} = req.body
    res.send(`OK, here are your ${qty} ${meat} tacos.`);
})

app.listen(3000,  () => {
    console.log("Hosting on port 3000");
})


// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID);
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment
