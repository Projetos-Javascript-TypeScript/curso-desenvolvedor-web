export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = { color: isWinner ? "green" : "red" }

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You  Win</h3> }
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}




// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;


//     return (
//         <div>
//             <div>Double Dice</div>
//             {num1 == num2 ? <h3>You Win</h3> : null }
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;


//     return (
//         <div>
//             <div>{num1 === num2 ? "You Win" : "You Lose :("}</div>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? "You Win" : "You Lose :("


//     return (
//         <div>
//             <div>{result}</div>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }