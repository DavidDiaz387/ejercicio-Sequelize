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
/**Crear peliculas */
router.get('/movies/create',moviesController.create);
/**Donde llega los datos */
router.post('/movies/create',moviesController.createDate);
/**Para mostrar el formulario de Editar */
router.get('/movies/edit/:id',moviesController.edit);
/**Datos de la pelicula editada */
router.put('/movies/edit/:id',moviesController.editDate);
/**Borrar pelicula */
router.delete('/movies/delete/:id',moviesController.delete);
/**Detalle del Genero */
router.get('/movies/generos/:id',moviesController.genero);
/**Detalle de Actores */
router.get('/movies/actores/:id',moviesController.actor);
/**Crear la union de un actor con una pelicula */
router.get('/movies/creacion',moviesController.creacion);
/**Datos de la nueva actuacion */
router.post('/creacion',moviesController.creacionData);

module.exports = router;
