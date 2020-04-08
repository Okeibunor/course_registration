

add_course = document.querySelector('#add_course');
add_course.addEventListener('click',(event)=>{
  event.preventDefault();
  template=`
    <div class="form-row">
    <div class="form-group col-10">
    <select name="courses" id="courses" class="form-control">
      <option value="null">--Select Course--</option>
      <option value="mathematics">Mathematics</option>
      <option value="english">English</option>
      <option value="physics">Physics</option>
      <option value="biology">Biology</option>
      <option value="chemistry">Chemistry</option>
    </select>
    </div>
    <div class="form-group col-2">
      <button id="delete" class="btn btn-danger">Remove</button>
    </div>
    </div>
  `;
  bottom = document.querySelector("#add_button");
  div = document.createElement('div');
  div.innerHTML = template;
  document.querySelector("form").insertBefore(div,bottom);
});

document.addEventListener('click',(event)=>{
  if(event.target.id === "delete"){
    event.target.parentElement.parentElement.remove();
    event.preventDefault();
  }
});

document.querySelector("#submit").addEventListener('click',(event)=>{
  event.preventDefault();
});
