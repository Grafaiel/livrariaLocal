const express = require('express');
const route = express.Router();

const login_controller = require('./src/controllers/loginController');
const book_controller = require('./src/controllers/bookController');
const author_controller = require('./src/controllers/authorController');
const genre_controller = require('./src/controllers/genreController');
const book_instance_controller = require('./src/controllers/bookinstanceController');


const { loginRequired } = require('./src/middlewares/middleware');


// LOGIN ROUTES //

route.get('/login/index', login_controller.index);  

route.post('/login/create', login_controller.create);

route.post('/login/login', login_controller.login);

route.get('/login/logout', login_controller.logout);

/// BOOK ROUTES ///

// GET catalog home page.
route.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
route.get('/book/create', loginRequired, book_controller.book_create_get);

// POST request for creating Book.
route.post('/book/create', loginRequired, book_controller.book_create_post);

// GET request to delete Book.
route.get('/book/:id/delete', loginRequired, book_controller.book_delete_get);

// POST request to delete Book.
route.post('/book/:id/delete', loginRequired, book_controller.book_delete_post);

// GET request to update Book.
route.get('/book/:id/update', loginRequired, book_controller.book_update_get);

// POST request to update Book.
route.post('/book/:id/update', loginRequired, book_controller.book_update_post);

// GET request for one Book.
route.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
route.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
route.get('/author/create', loginRequired, author_controller.author_create_get);

// POST request for creating Author.
route.post('/author/create', loginRequired, author_controller.author_create_post);

// GET request to delete Author.
route.get('/author/:id/delete', loginRequired, author_controller.author_delete_get);

// POST request to delete Author.
route.post('/author/:id/delete', loginRequired, author_controller.author_delete_post);

// GET request to update Author.
route.get('/author/:id/update', loginRequired, author_controller.author_update_get);

// POST request to update Author.
route.post('/author/:id/update', loginRequired, author_controller.author_update_post);

// GET request for one Author.
route.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
route.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
route.get('/genre/create', loginRequired, genre_controller.genre_create_get);

//POST request for creating Genre.
route.post('/genre/create', loginRequired, genre_controller.genre_create_post);

// GET request to delete Genre.
route.get('/genre/:id/delete', loginRequired, genre_controller.genre_delete_get);

// POST request to delete Genre.
route.post('/genre/:id/delete', loginRequired, genre_controller.genre_delete_post);

// GET request to update Genre.
route.get('/genre/:id/update', loginRequired, genre_controller.genre_update_get);

// POST request to update Genre.
route.post('/genre/:id/update', loginRequired, genre_controller.genre_update_post);

// GET request for one Genre.
route.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
route.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
route.get('/bookinstance/create', loginRequired, book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
route.post('/bookinstance/create', loginRequired, book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
route.get('/bookinstance/:id/delete', loginRequired, book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
route.post('/bookinstance/:id/delete', loginRequired, book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
route.get('/bookinstance/:id/update', loginRequired, book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
route.post('/bookinstance/:id/update', loginRequired, book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
route.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
route.get('/bookinstances', book_instance_controller.bookinstance_list);



module.exports = route;