module.exports = (sequelize,Datatypes)=>{
    let genre = sequelize.define(
        "Genre",
        {
            name:Datatypes.STRING,
            ranking:Datatypes.INTEGER
        },
        {
            timestamps:false
        }
    );
    genre.associate = function(models){
        console.log(models)
        genre.hasMany(models.Movie)
    }
    return genre
}