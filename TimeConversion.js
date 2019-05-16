// Time Conversion

// Write a function that takes in a number of seconds and returns the total time as a string in the following format
// hh:mm:ss EACH VALUE MUST BE TWO DIGITS! so if the seconds add up to 1 hour 30 mins 20 secs the return will be 01:30:20
// make use of math.floor when calculating hours and minutes;
// use string litoral syntax in your return statemnt.
// their are 3600 seconds in one hour

function timeConvert(time) {
//total sec = time;
//time/3600 = hour
let hour = Math.floor(time/3600);

let mins = Math.floor((time-hour*3600)/60);
//time %seconds
let secs = mins%60;

hour = hour.toString();
mins = mins.toString();
secs = secs.toString();



 return time =`${hour}:${mins}:${secs}` ;

 //code here
}
timeConvert(20000);
//8050sec = 2hr 14m 10sec;
