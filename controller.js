//noinspection JSUnresolvedVariable,JSUnusedGlobalSymbols
(function(){
	"use strict";

	const express = require('express')
		, statPort = 5000
		, stat = express()
		, Server = require('./server')
		, serveStatic = require('serve-static')
		, publicD =  __dirname + '/public/';
  var i = 0;

	stat.use('/' , serveStatic(publicD));
  
//  stat.get('/join', function(req, res){
//    res.redirect('/');
//  });

  stat.post('/join' , function(req, res){

//    var resp = { "id": i + 1 , "email": 'string' };
    

    console.log (req.query);


    var obj = {
      headers : req.headers
    , url : req.url
    , method : req.method
    , statusCode : req.statusCode
    , baseUrl : req.baseUrl
    , originalUrl : req.originalUrl
    , _parsedUrl : req._parsedUrl
    , params : req.params
    , query : req.query
    }

    if(req.query.email){
      res.send(obj);
    } else {
      res.status(400).send("error")
    }
  });

	stat.set('port', statPort)
			.set('cache', false);
	new Server(stat);
})();





