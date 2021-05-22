const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||  userInput === 'bomb' ){
      return userInput;
    }
    else{
      console.log("Invalid choice by user")
    }
  };
  
  
   function getComputerChoice()    {
    let number = Math.floor(Math.random() * 3);
   
   switch(number){
    case 0:
    return "rock"
    break;
    case 1:
    return "paper"
    break;
    case 2:
    return "scissors"
   }
  }
  
  const determineWinner = (userChoice, computerChoice ) => {
  
    if(userChoice == computerChoice){
      return 'The game is a tie';
    }
    if(userChoice == 'rock'){
      if(computerChoice == 'paper'){
        return 'The computer has won';
      }else{
        return 'You won';
      }  
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors' ){
  
        return 'The computer has won'
      }else{
        return "You won"
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return "You won";
      }else{
        return "The computer has won";
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return "The computer has won";
      }else{
        return "You won";
      }
    }
    if(userChoice === 'bomb')
    {
      return 'You won'
    }
  }
  
  function playGame(){
    let userChoice = getUserChoice('BOM');
    let computerChoice = getComputerChoice();
  
    console.log("userChoice......."  + userChoice);
    console.log("computerChoice...." + computerChoice);
  
    //call the winner function
    console.log(determineWinner(userChoice,computerChoice));
  
  }
  
  //play the game
   playGame();
  
    
  
  