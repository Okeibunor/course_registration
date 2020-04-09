  document.querySelector('#search').addEventListener('click',function(event){
    event.preventDefault();

    var search = document.querySelector('#keyword').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search='+search,true)

    xhr.onload=function(){
      if(this.status == 200){
        var jsonfile = JSON.parse(this.responseText).data.rows;
        var data = jsonfile.map((e)=>{
          return [e.country,e.new_cases,e.total_deaths,e.total_recovered,e.active_cases,e.flag];
        });
        data.forEach(element => {
          var data = document.querySelector('#data');
          data.innerHTML = element[0]+'<br>'+element[1]+'<br>'+element[2]+'<br>'+element[3]+'<br>'+element[4]+'<br>'+'<img class="img-fluid" width="150px" src='+element[5]+'>'+'<br>';
        });
        // var labels = jsonfile.map(function(e) {
        //   return e.country;
        // });

        // var data = jsonfile.map(function(e) {
        //   return e.total_cases;
        // });;
        
        // var ctx = document.getElementById('canvas').getContext('2d');
        // var config = {
        //   type: 'bar',
          
        //   data: {
        //     labels: labels,
        //     datasets: [{
        //         label: 'line',
        //         data: data,
        //         backgroundColor: 'rgba(100,100,2)'
        //     }]
        //   },
        //   options: {
        //     title: {
        //         display: true,
        //         text: 'Total Covid-19 Cases'
        //     }
        // }
        // };
        
        // var chart = new Chart(ctx, config);
        
      }
      else{
        console.log('error found...');
      }
    }

    xhr.send();



  });
  
  