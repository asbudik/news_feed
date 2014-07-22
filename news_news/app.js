var express = require('express'),
ejs = require('ejs'),
bodyParser = require('body-parser'),
app = express();


var articles = [];

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('site/index')
})

app.get('/about', function(req, res) {
	res.render('site/about');
})

app.get('/contact', function(req, res) {
	res.render('site/contact');
})

app.get('/articles', function(req, res) {
  res.render('articles/list_article', {articles: articles});
})

// app.get('/articles/new', function(req, res) {
//   res.render('articles/new');
// })

app.get('/articles/:id', function(req, res) {
  var id = req.params.id;
  var article = articles[id];
  res.render('articles/show', {article: article})
})

app.post('/articles', function(req, res) {
  articles.push(req.body.article);
  console.log(articles);
  res.redirect('/');
})

app.listen(3000, function() {
  console.log("SERVER STARTED ON localhost:3000");
});