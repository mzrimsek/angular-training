'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost', routes: { cors: true } });

let shared = { id: '1', description: 'Black and Gold Shared System', price: 4995.00, inventory: 10 };
let echophon = { id: '2', description: 'Echophon', price: 399.00, inventory: 3 };
let morphogene = { id: '3', description: 'Morphogene', price: 529.00, inventory: 8 };

server.route({
    method: 'GET',
    path: '/products',
    handler: function (request, reply) {
        setTimeout(() => {
            reply({ '_data': [shared, echophon, morphogene] });
        }, 2000);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});