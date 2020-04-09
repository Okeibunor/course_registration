var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' );
});

//basic routing 
app.get('/',(req,res)=>{
  res.type('text/plain');
  res.status(200);
  res.send('Homepage running...');
});

app.get('/about',(req,res)=>{
  res.type('text/plain');
  res.status(200);
  res.send('About page running...');
});

// custom 404 page
app.use((req, res,next)=>{
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
// custom 500 page
app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});
