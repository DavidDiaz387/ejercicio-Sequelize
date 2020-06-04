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
    )
    return genre
}