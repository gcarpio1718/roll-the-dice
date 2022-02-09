const prompt = require('prompt-sync')();

let numSides = Number(prompt("How many sides would you like your dice to have?"));

if (numSides === 0 || numSides === 1){
    console.log("You can't have a zero-sided or one-sided dice. Run again."); 
    return;
}

let riggedNum = Number (prompt("What do you want the rigged number to be? "));

if (riggedNum > numSides){
    console.log ("You can't choose a rigged number greater than the sides that a dice has. Run again");
    return;
}

let randNum2 = Math.random();

let riggedRoll = Math.floor(randNum2 * 2);

if (riggedRoll === 0){
    
    let randNum = Math.random();

    let dice = Math.ceil (randNum * numSides);

    console.log("You got the number " + dice + " on your " + numSides + "-sided dice.");

}else{
    console.log("You got the number " + riggedNum + " on your " + numSides + "-sided dice.");
}