var jwt = require('express-jwt');
var tokenManager = require('./api/config/token_manager');
var secret = require('./api/config/secret');
var express = require('express');
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan  = require('morgan'); // logger

var app = express();

//setting up frontend to serve 
app.use(express.static(__dirname + "/app"));

//setting up API to serve

//Routes
var routes = {};
routes.posts = require('./api/route/posts.js');
routes.users = require('./api/route/users.js');
routes.rss = require('./api/route/rss.js');

app.use(bodyParser());
app.use(morgan());

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});


//Get all published post
app.get('/post', routes.posts.list);

//Get all posts
app.get('/post/all', routes.posts.listAll);

//Get the post id
app.get('/post/:id', routes.posts.read); 

//Like the post id
app.post('/post/like', routes.posts.like);

//Unlike the post id
app.post('/post/unlike', routes.posts.unlike);

//comment 
app.post('/post/comment', routes.posts.comment);

//Get posts by tag
app.get('/tag/:tagName', routes.posts.listByTag); 

//Create a new post
app.post('/post',  tokenManager.verifyToken , routes.posts.create); 

//Edit the post id
app.put('/post',  routes.posts.update); 

//Delete the post id
app.delete('/post/:id', routes.posts.delete); 

//Create a new user
app.post('/user/register', routes.users.register); 

//Login
app.post('/user/signin', routes.users.signin); 

//Logout
app.get('/user/logout', routes.users.logout); 

//Serve the rss feed
app.get('/rss', routes.rss.index);


app.listen(3002);

console.log('Blog API is starting on port 3002');