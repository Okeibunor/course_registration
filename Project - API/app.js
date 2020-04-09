
let a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;

fullGame = [[a,b,c],
            [d,e,f],
            [g,h,i]];


document.querySelector("#a").addEventListener("click",function(){
  a += 1;
});

document.querySelector("#b").addEventListener("click",function(){
  b += 1;
});

document.querySelector("#c").addEventListener("click",function(){
  c += 1;
});



setInterval(function(){
  if(a&&b&&c){
    console.log("Game Won");
    continue;
  }
},5000);


console.log(fullGame);
