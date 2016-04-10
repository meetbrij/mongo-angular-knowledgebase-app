var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function (err, articles) {
  	if(err) {
  		console.log("err: " + err);
  	} else {
  		res.json(articles);
  	}
  })
});

/* GET article by ID */
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function (err, article) {
  	if(err) {
  		console.log("err: " + err);
  	} else {
  		res.json(article);
  	}
  })
});

/* GET article by Category */
router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function (err, article) {
  	if(err) {
  		console.log("err: " + err);
  	} else {
  		res.json(article);
  	}
  })
});

/* POST new article */
router.post('/', function(req, res, next) {
  // GET form values
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;

  // new Article Object
  var newArticle = new Article({
    title: title,
    body: body,
    category: category
  })

  //create Article
  Article.createArticle(newArticle, function (err, articles) {
    if(err) {
      console.log("err: " + err);
    } 
    res.location('/articles');
    res.redirect('/articles');
  })
});

/* UPDATE article */
router.put('/', function(req, res, next) {
  // GET form values
  var id = req.body.id;
  var data = new Article({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })

  // update Article
  Article.updateArticle(id, data, function (err, articles) {
    if(err) {
      console.log("err: " + err);
    } 
    res.location('/articles');
    res.redirect('/articles');
  })
});

/* DELETE article */
router.delete('/:id', function(req, res, next) {
  // GET form values
  var id = req.params.id;
  
  // delete Article
  Article.deleteArticle(id, function (err, articles) {
    if(err) {
      console.log("err: " + err);
    } 
    res.location('/articles');
    res.redirect('/articles');
  })
});

module.exports = router;
