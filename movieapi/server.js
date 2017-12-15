'use strict';

const Hapi = require('hapi');
const cuid = require('cuid');

const server = new Hapi.Server();
server.connection({
    port: 3000, host: 'localhost', routes: {
        cors: true
    }
});

let movies = [
    { id: cuid(), title: 'Star Wars VIII: The Last Jedi', releaseDate: '12/15/2017', purchased: true },
    { id: cuid(), title: 'Jumanji', releaseDate: '12/20/2017', purchased: false },
    { id: cuid(), title: 'The Shape of Water', releaseDate: '12/20/2017', purchased: false }
];

server.route({
    method: 'GET',
    path: '/movies',
    handler: function (request, reply) {
        setTimeout(() => {
            return reply({ _data: movies });
        }, 3000);
    }
});

server.route({
    method: 'POST',
    path: '/movies',
    handler: function (request, reply) {
        const { title, releaseDate } = request.payload;
        const newMovie = {
            id: cuid(),
            title: title,
            releaseDate: releaseDate,
            purchased: false
        };
        movies = [...movies, newMovie];
        return reply({ _data: newMovie }).code(201);
    }
});

server.route({
    method: 'POST',
    path: '/movies/purchase',
    handler: function (request, reply) {
        if (request.payload.title === 'Jumanji') {
            setTimeout(() => {
                return reply({ message: 'Grow up!' }).code(400);
            }, 2000);
        } else {
            const id = request.payload.id;
            let movie = movies.find(movie => movie.id === id);
            movie.purchased = true;
            return reply({ _data: movie }).code(202);
        }
    }
});

server.route({
    method: 'GET',
    path: '/message',
    handler: function (request, reply) {
        setTimeout(() => {
            reply({
                message: 'Hello, World!',
                by: 'Mike'
            })
        }, 3000);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});