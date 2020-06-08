module.exports = (sequelize,Datatypes)=>{
    let genre = sequelize.define(
        "genre",
        {
            name:Datatypes.STRING,
            ranking:Datatypes.INTEGER
        },
        {
            timestamps:false
        }
    );
    genre.associate = function(models){
        genre.hasMany(models.Movie,{
            as:"Movie"
        })
    }
    return genre
}