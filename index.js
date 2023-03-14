'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });
  
    await server.register(require('@hapi/inert'));
    
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('public/map.html');
        }
    });
  
    server.route({
        method: 'GET',
        path: '/data',
        handler: async (request, h) => {
          
            const response = await fetch("www.google.com");
            const text = await response.text();
          
            return process.env.mapkey;
        }
    });
  

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();