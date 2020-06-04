let DB = require('../database/models')
let OP = DB.Sequelize.Op

let moviesController = {
    index:function(req,res){
        DB.Movie.findAll()
        .then(function(movies){
            res.render('index',{movies:movies})
        })
        .catch(function(error){
            res.send(error)
        })
    },
    detail:function(req,res){
        DB.Movie.findByPk(req.params.id)
        .then(function(movie){
            res.render('detailMovie',{movie:movie})
        })
    },
    nuevo:function(req,res){
        DB.Movie.findAll({
            limit:5,
            order:[
                ["release_date","desc"]
            ]
        })
            .then(function(movies){
                res.render('estrenoMovies',{movies:movies})
            })
    },
    recom:function(req,res){
        DB.Movie.findAll({
            where:{
                rating:{[OP.gte]:8}
            }
        })
            .then(function(movies){
                res.render('moviesRating',{movies:movies})
            })
    },
    search:function(req,res){
        DB.Movie.findAll({
            where:{
                title:{[OP.like]:req.body.title+"%"}
            }
        })
            .then(function(resultado){
                res.render('searchMovies',{resultado:resultado})
            })
    }
}
module.exports = moviesController;