let userName = '';

if(userName != ''){
  console.log('Hello, ' + userName);
}
else
{
  console.log('Hello');
}

//variable to store userQuestion
let userQuestion = '';

console.log("Question asked " + userQuestion + ' by user ' + userName);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//control flow 

switch(randomNumber){
case 0:
eightBall = 'It is certain';
break;
case 2:
eightBall = 'It is decidedly so';
break;
case 3:
eightBall = 'Reply hazy try again';
break;
case 4:
eightBall = 'Cannot predict now';
break;
case 5:
eightBall =  'My sources say no';
break;
case 6:
eightBall = 'Outlook not so good';
break;
case 7:
eightBall = 'Signs point to yes'; 
}

//print out results
console.log("The magic  ball chosen is........" + eightBall + ' from random number ' + randomNumber);
