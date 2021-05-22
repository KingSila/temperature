let raceNumber = Math.floor(Math.random() * 1000);


let checkearlyRunner = true;

let runnerAge = 19;

if(checkearlyRunner == true && runnerAge > 18 ){

  raceNumber += 1000;

}
if(checkearlyRunner == true && runnerAge > 18){
  console.log("Your race will start at 9:30 am " + raceNumber)
}
else if(runnerAge > 18 && checkearlyRunner == false)
{
  console.log("Your race will start at 11:00 am " + raceNumber)
}
else if(runnerAge < 18 ) {

  console.log("Your race will start at 12:30 pm " + raceNumber)
}
else if(runnerAge == 18){
    console.log("Please see the registration desk");
  }