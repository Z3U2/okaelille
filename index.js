const express = require('express'),
      app = express(),
      path = require('path');

// index
app.get('/home',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/',(req,res) => {
  res.redirect('/home');
});

app.get('/work',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/work.html'));
});

app.get('/about',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/blog',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/blog.html'));
});

app.get('/contact',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});

app.get('/blog01',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/blog01.html'));
});

app.get('/work01',(req,res) => {
  res.sendFile(path.join(__dirname + '/public/work01.html'));
});

// serving static files
app.use(express.static(__dirname + '/public/'));


// listenning on port 3000
app.listen(3000);
console.log("Listenning on port 3000");
