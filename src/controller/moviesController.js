let DB = require("../database/models");
let OP = DB.Sequelize.Op;

let moviesController = {
  index: function (req, res) {
    DB.Movie.findAll()
      .then(function (movies) {
        res.render("index", { movies: movies });
      })
      .catch(function (error) {
        res.send(error);
      });
  },
  detail: function (req, res) {
    DB.Movie.findByPk(req.params.id, {
      include: ["genre","actors"]
    }).then(function (movie) {
      res.render("detailMovie", { movie: movie });
    });
  },
  nuevo: function (req, res) {
    DB.Movie.findAll({
      limit: 5,
      order: [["release_date", "desc"]],
    }).then(function (movies) {
      res.render("estrenoMovies", { movies: movies });
    });
  },
  recom: function (req, res) {
    DB.Movie.findAll({
      where: {
        rating: { [OP.gte]: 8 },
      },
    }).then(function (movies) {
      res.render("moviesRating", { movies: movies });
    });
  },
  search: function (req, res) {
    DB.Movie.findAll({
      where: {
        title: { [OP.like]: req.body.title + "%" },
      },
    }).then(function (resultado) {
      res.render("searchMovies", { resultado: resultado });
    });
  },
  create: (req, res) => {
    DB.genre.findAll().then(function (genero) {
      res.render("createForm", { genero });
    });
  },
  createDate: async (req, res) => {
    await DB.Movie.create({
      title: req.body.title,
      awards: req.body.awards,
      rating: req.body.rating,
      length: req.body.length,
      release_date: Date.now(),
      genre_id: req.body.genre,
    });
    res.redirect("/movies");
  },
  edit: async (req, res) => {
    let movie = await DB.Movie.findByPk(req.params.id, {
      include: ["genre"],
    });
    let genre = await DB.genre.findAll();
    Promise.all([movie, genre]);
    res.render("editForm", { movie, genre });
  },
  editDate: async (req, res) => {
    await DB.Movie.update(
      {
        title: req.body.title,
        awards: req.body.awards,
        rating: req.body.rating,
        length: req.body.length,
        release_date: Date.now(),
        genre_id: req.body.genre,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/movies");
  },
  delete: async (req, res) => {
    await DB.Movie.destroy({
        where:{
            id:req.params.id
        }
    });
    res.redirect("/movies");
  },
  genero:async (req,res)=>{
      let genre = await DB.genre.findByPk(req.params.id,{
          include:["Movie"]
      })
      res.render('detailGenre',{genre})
  },
  actor:async (req,res)=>{
      let actor = await DB.Actor.findByPk(req.params.id,{
          include:["movies"]
      })
      res.render('detailActor',{actor})
  },
  creacion:async (req,res)=>{
      let actor = await DB.Actor.findAll()
      let movie = await DB.Movie.findAll()
      Promise.all([actor,movie])
      res.render('creacion',{actor,movie})
  },
  creacionData:async (req,res)=>{
      await DB.actorMovie.create({
          movie_id:req.body.movie,
          actor_id:req.body.actor
      })
      res.redirect('/movies')
  }
};
module.exports = moviesController;
