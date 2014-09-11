//noinspection JSUnresolvedVariable,JSUnusedGlobalSymbols
(function(){
	"use strict";

	const express = require('express')
		, statPort = 5000
		, stat = express()
		, Server = require('./server')
		, serveStatic = require('serve-static')
		, publicD =  __dirname + '/public/';

	stat.use('/' , serveStatic(publicD));
	stat.set('port', statPort)
			.set('cache', false);
	new Server(stat);
})();


