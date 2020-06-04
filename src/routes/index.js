var express = require('express');
var router = express.Router();
var moviesController = require('../controller/moviesController')

/* Listado de Peliculas */
router.get('/movies', moviesController.index);
/**Detalle de Pelicula */
router.get('/movies/detail/:id',moviesController.detail);
/**Las 5 peliculas */
router.get('/movies/new',moviesController.nuevo);
/**Peliculas con rating igual o mayor a 8 */
router.get('/movies/recommended',moviesController.recom);
/**Buscador de Peliculas */
router.post('/movies/search',moviesController.search);

module.exports = router;
