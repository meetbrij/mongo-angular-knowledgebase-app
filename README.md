# MongoDB KnowledgeBase app

This project is a KnowledgeBase application developed using MongoDB, NodeJS, Angular and Express.

Dependencies
- node.js and npm
- MongoDB
- Express
- Bower
- Angular
- Bootstrap

## Getting Started

Install Express
```
npm install -g express
npm install -g express-generator
```

Create Express Project
```
express knowledgeBase
```

Add mongodb and mongoose as depedencies to package.json

```
npm install
```

Install Frontend Dependencies
```
cd public
bower install angular
bower install angular-route
bower install bootstrap
```

Site Updates (for creating from scratch)
- To add models you need to create a model folder and add schema for both articles and categories
- You also need to add routes for articles and categories in the routes folder
- Angular views would be created in the public folder
- Add an index.html file in the public folder and copy-paste the markup from [bootstrap starter template](http://getbootstrap.com/examples/starter-template/)
- modify index.html to add frontend dependencies

In a separate console execute the mongo command inside MongoDB/server/3.2/ bin folder and then run the following commands to create collections in mongodb
```
mongo
use knowledgebase
db.createCollection('articles')
db.createCollection('cateogories')
db.categories.insert({ name : "Technology"});
db.categories.insert({ name : "Education"});
db.categories.insert({ name : "Healthcare"});
db.categories.find().pretty();
db.articles.insert({ title : "Article 1", category : "Technology", body : "", date : new Date()});
db.articles.insert({ title : "Article 2", category : "Education", body : "", date : new Date()});
db.articles.insert({ title : "Article 3", category : "Healthcare", body : "", date : new Date()});
db.articles.find().pretty();
// to add a property named description to the category with name Technology
db.categories.update({name : "Technology"}, {$set: { description : "Lorem ipsum"}})
// to remove property
db.categories.update({name : "Technology"}, {$unset: { description : ""}})
```

Run the project
```
npm start
```

The above project was created by following the steps given in the tutorial at [Eduonix](https://www.udemy.com/learn-angularjs-development/)