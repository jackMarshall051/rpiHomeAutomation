// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function (app) {
  app.get('/', function(req, res){ 
    res.render('home', {title: "Main"}); 
  })
  app.get('/homeauto', function(req, res){ 
    res.render('homeAuto', {title: "HomeAuto"}); 
  })
  app.get('/lighting', function(req, res){ 
    res.render('lighting', {title: "Lighting"}); 
  })
  app.get('/media', function(req, res){ 
    res.render('media', {title: "Media"}); 
  })
  app.get('/dashboard', function(req, res){ 
    res.render('dashboard', {title: "Dashboard"}); 
  })

};