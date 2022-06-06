/*
How many hours did you spend on this assignment?:
around 5 hours
What part of the assignment did you spend the most time on?:
making the win rate % and times,in there cannot find the problems so long
How comfortable did you feel with this assignment? (1-5):
2.7
Is there anything in this code that you feel pleased about?:
When it is work time very cool.I see my code, I'm satisfied but it's not perfect.
What's one aspect of your code you would like specific, elaborate feedback on?:
can make this advance?
*/
var paper = 'paper';
var stone = 'stone';
var scissors = 'scissors';
var reversed_paper = 'reversed paper';
var reversed_stone = 'reversed stone';
var reversed_scissor = 'reversed scissor';
var mode = 'Please input your name'
var userName = '';

//track number of win /lose
var numOfGamesPlayed = 0;
var numOfPlayerWin = 0;
var numOfComputerWin = 0;
var numOfGamesDraw = 0;
//for player
var playerBeatsComputer = function (playerObj , computerObj) {
  return (
    (playerObj == scissors && computerObj == paper)|| (playerObj == paper && computerObj == stone) || (playerObj == stone && computerObj == scissors)||
    (playerObj == reversed_scissor && computerObj == paper)|| (playerObj == reversed_paper && computerObj == stone) || (playerObj == reversed_stone && computerObj == scissors)
  );
};
//for computer
var computerBeatsPlayer = function (playerObj , computerObj) {
  return (
   (playerObj == scissors && computerObj == stone)|| (playerObj == paper && computerObj == scissors) || (playerObj == stone && computerObj == paper)||
    (playerObj == reversed_scissor && computerObj == stone)|| (playerObj == reversed_paper && computerObj == scissors) || (playerObj == reversed_stone && computerObj == paper)
  );
};
//draw
var playerDrawComputer = function (playerObj , computerObj) {
  return (playerObj == computerObj ||
    (playerObj == reversed_scissor && computerObj == scissors) ||
    (playerObj == reversed_paper && computerObj == paper)||
    (playerObj == reversed_stone && computerObj == stone)
  );
}
var main = function (input) {
  var myOutputValue = '';
  if (mode == 'Please input your name') {
  //from  5.2 
    userName = input;
    mode = 'scissors paper stone';
    myOutputValue = 'Hello ' + userName;
  }else if (mode == 'scissors paper stone'){
// Randomly return one of scissors,paper or stone.
  var generateObject = function () {
  var randomNum = Math.floor(Math.random() *3) +1;
  // Return the object that corresponds to the relevant number
  if (randomNum == 1) {
    return scissors;
  }
  if (randomNum == 2) {
    return paper;
  }
  if (randomNum == 3) {
  return stone;
  }
}
  }
  if (input != scissors && input != paper && input != stone) {
    return `Hello ${userName}, Please input 'scissors', 'paper' or 'stone'`;
  }
var playerObj = input;
var computerObj = generateObject();

  //player wins

 //Calculate how many times the user wins out of the total number of games they play 

  if (playerBeatsComputer(playerObj,computerObj)) {
 numOfGamesPlayed += 1;
 numOfPlayerWin += 1;
 winRate = Math.floor((numOfPlayerWin / numOfGamesPlayed) * 100); 
 return `${userName} choose: ${playerObj}<br> computer choose: ${computerObj} <br><br>Congrat ${userName}.You win!😇 <br><br>You win ${winRate}% of the games.<br><br>You won ${numOfPlayerWin} times.<br> Computer won ${numOfComputerWin} times.<br><br> Total number of played times: ${numOfGamesPlayed} `
};
//for lose
if (computerBeatsPlayer(playerObj,computerObj)) {
 numOfGamesPlayed += 1;
 numOfComputerWin += 1;
 winRate = Math.floor((numOfComputerWin / numOfGamesPlayed) * 100); 
  return `${userName} choose: ${playerObj}<br> computer choose: ${computerObj} <br><br>You lose🌚<br> Try again.Don't Give up. <br><br>Computer win ${winRate}% of the games.<br><br> You won ${numOfPlayerWin} times.<br>Computer won ${numOfComputerWin} times.<br><br> Total number of played times: ${numOfGamesPlayed}`
  };
  //draw
  if (playerDrawComputer(playerObj,computerObj)) {
    numOfGamesPlayed += 1 ;
    numOfGamesDraw +=1;
  return `This is draw!. Computer does not satisfied.<br><br>Draw times:${numOfGamesDraw} <br> Total number of played times: ${numOfGamesPlayed}`
  };
}
