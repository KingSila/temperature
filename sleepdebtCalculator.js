function getSleepHours(day){
    day = day.toLowerCase();
    //check day and return hours
    if(day ==='monday'){
      return 5;
    }
    else if(day ==='tuesday'){
      return 4;
    }
    else if(day ==='wednesday'){
      return 10;
    }
    else if(day ==='thursday'){
      return 6;
    }
    else if(day ==='friday'){
      return 5;
    }
    else if(day ==='saturday'){
      return 10;
    }
    else if(day ==='sunday'){
      return 4;
    }
    else
    {
      return "INVALID DAY OF THE WEEK"
    }
    
    }
    
    const  getActualSleepHours = () => 
    
         getSleepHours('monday')
          + getSleepHours('tuesday')
        + getSleepHours('wednesday')
        + getSleepHours('thursday')
        + getSleepHours('friday')
        + getSleepHours('saturday')
        + getSleepHours('sunday');
     
    const  getIdealSleepHours  = () => {
    
        const idealHours = 8 ;
        return idealHours * 7;
    }
    
    
    const  calculateSleepDebt   = () => {
    
        const actualSleepHours  = getActualSleepHours() ;
        const idealSleepHours  = getIdealSleepHours() ;
    
        let sleepDiff = actualSleepHours - idealSleepHours;
    
        if(actualSleepHours == idealSleepHours){
          console.log('Perfect amount of sleep');
        }
        else if(actualSleepHours > idealSleepHours ){
          console.log('Got more sleep than needed');
          console.log('You are over ' + sleepDiff + ' Hours for the week');
        }
        else if(actualSleepHours < idealSleepHours ){
          console.log('Please get some rest');
          console.log('You are under ' + sleepDiff + ' Hours for the week');
        }
    }
    calculateSleepDebt();
    
    
    