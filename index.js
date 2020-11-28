var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score=0;
console.log(chalk.black.bgGreen.underline("Welcome to Awesome GAME OF THRONES quiz "));
console.log(chalk.redBright("This is the test to let you know whether you are a TRUE Game Of Thrones fan or not. "));

console.log(chalk.keyword("orange")("Enter your Name!"));
var playerName=readlineSync.question(playerName);
console.log(chalk.cyan("Welcome "+ playerName + " Let's Begin!"));

function questionBank(question,answer){
    console.log(chalk.redBright("Please Type answer in this format: Jon Snow (Words first letter in Capital)"));
    console.log(chalk.keyword('orange')(question));
    var playerAnswer=readlineSync.question(playerAnswer);
    console.log("Your Answer: "+ playerAnswer);

    if(playerAnswer === answer){
       console.log(chalk.green("Correct Answer!"));
       score=score + 1;
    }else{
        console.log(chalk.red("Wrong Answer!"));
       score=score - 1;
    }

    console.log("-------------"); 
    console.log("Current Score:"+ score);
}



questionBank("1. Who is king of Westeros at the very start of the show?","Robert Baratheon");
questionBank("2. What is the name of Jon Snow’s direwolf?","Ghost");
questionBank("3. Name the orphan baker boy who befriends Arya Stark.","Hot Pie");
questionBank("4. How many episodes of Game of Thrones are there in total?","73");
questionBank("5.What do the initials stand for in the infamous – and ultimately correct – Game of Thrones fan theory ‘R+L=J’? Please write answer with seperated by , , ","Rhaegar,Lyanna,Jon");
questionBank("6. The drummer for which famous band made a cameo appearance during the Red Wedding?","Coldplay");
questionBank("7. Which character says the line: “Say it. Say her name. Say it!”","Oberyn Martell");
questionBank("8. The largest skull in the dungeons beneath King’s Landing belonged to which dragon?","Balerion");
questionBank("9. Name the ancestral home of House Lannister.","Casterly Rock");
questionBank("10. Which character ends up being crowned King of the Six Kingdoms in the final episode?","Bran Stark");

if(score===10){
    console.log("Your Final Score:",score);
  console.log("Congratulations," + playerName +" you are a TRUE fan of Game Of Thrones");
}else{
console.log("Your Final Score:",score);
}

