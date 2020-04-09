let hours = 0;
let minutes = 0;
let seconds = 10;


let displayHours 
let displayMinutes 
let displaySeconds 


let status = "stopped";
function startWatch(){
    seconds--;
    if (seconds===-1){
      minutes-=1;
      seconds=59; 
      if (minutes===-1){
        hours-=1;
        minutes=59;
      }
    } 
  if (hours<10){
    displayHours = "0"+ hours.toString();
  }else{
    displayHours = hours.toString();
  }

  if (minutes<10){
    displayMinutes = "0"+ minutes.toString();
  }else{
    displayMinutes = minutes.toString();
  }

  if (seconds<10){
    displaySeconds = "0"+ seconds.toString();
  }else{
    displaySeconds = seconds.toString();
  }
  
  if(hours===0&&minutes===0&seconds===0){
    document.querySelector("#audio").innerHTML= `<audio controls autoplay><source src="Fireboy-DML-Scatter.mp3"/></audio>`
    reset();
  }

  document.querySelector(".headings").innerHTML=`${displayHours}:${displayMinutes}:${displaySeconds}`
}

document.querySelector("#startButton").addEventListener("click",function(){
  if (status === "stopped"){
    interval = setInterval(startWatch,1000);
    document.querySelector("#startButton").innerHTML = "STOP";
    document.querySelector("#startButton").className="btn btn-danger";
    status = "start";
  }
  else if (status === "start"){
    clearInterval(interval);
    document.querySelector("#startButton").innerHTML = "START";
    document.querySelector("#startButton").className="btn btn-primary";
    status = "stopped";
  }
})

document.querySelector("#resetButton").addEventListener("click",reset);

function reset(){
  clearInterval(interval);
  document.querySelector("#startButton").innerHTML = "START";
  document.querySelector("#startButton").className="btn btn-primary";
  status = "stopped";
  let hours = 1;
  let minutes = 0;
  let seconds = 0;
  document.querySelector(".headings").innerHTML=`0${hours}:0${minutes}:0${seconds}`

}
