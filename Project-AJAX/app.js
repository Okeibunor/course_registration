document.querySelector(".ajax").addEventListener("click",function(){
  const ajax = new XMLHttpRequest();

  ajax.open("GET","customers.json",true);

  ajax.onload = function(){
  if (this.status === 200){
    const ajax = JSON.parse(this.responseText);
    ajax.forEach(element => {
      ajaxUI = document.createElement("div");
      ajaxUI.className = "mt-2"
      ajaxUI.innerHTML = `<hr>
      <p>id: ${element.id}</p>
      <p>name: ${element.name}</p>
      <p>company: ${element.company}</p>
      <p>phone: ${element.phone}</p>`
      document.querySelector(".heading").appendChild(ajaxUI);
    });
    
    }
    
  }

  ajax.send();
});