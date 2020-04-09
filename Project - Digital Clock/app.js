setInterval(function(){
  Time = new Date();
  hours = Time.getHours();
  minutes = Time.getMinutes();
  seconds = Time.getSeconds();
  if(hours<10){
    hours = "0"+ hours;
  }
  if(minutes<10){
    minutes = "0"+ minutes;
  }
  if(seconds<10){
    seconds = "0"+ seconds;
  }

  document.querySelector(".headings").innerHTML=`${hours}:${minutes}:${seconds}`;
},000);

function day(number){
  switch(number){
    case 0:
      return ("Sunday");
      break;
    case 1:
      return ("Monday");
      break;
    case 3:
      return("Tuesday");
      break;
    case 4:
      return("Wednesday");
      break;
    case 5:
      return("Thursday");
      break;
    case 6:
      return("Friday");
      break;
    case 7:
      return("Saturday");
      break;
  }
}


setInterval(function(){
  (document.querySelector(".days")).innerHTML = `${day(new Date().getDay())}`;
},1000);

setInterval(function(){
  date = new Date().getDate();
  month = new Date().getMonth();
  year = new Date().getUTCFullYear();
  

  (document.querySelector(".date")).innerHTML = `${date} ${getMonth(month)}, ${year}`;
},1000);

function getMonth(number){
  switch(number){
    case 0:
      return ("January");
      break;
    case 1:
      return ("February");
      break;
    case 3:
      return("March");
      break;
    case 4:
      return("April");
      break;
    case 5:
      return("May");
      break;
    case 6:
      return("June");
      break;
    case 7:
      return("July");
      break;
    case 8:
      return("August");
      break;
    case 9:
      return("September");
      break;
    case 10:
      return("October");
      break;
    case 11:
      return("November");
      break;
    case 12:
      return("December");
      break;
  }
}


