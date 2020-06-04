module.exports = (sequelize,Datatypes)=>{
    const movie = sequelize.define(
        "Movie",
        {
            id:{primaryKey:true,type:Datatypes.INTEGER},
            title:Datatypes.STRING,
            rating:Datatypes.DECIMAL,
            awards:Datatypes.INTEGER,
            length:Datatypes.INTEGER,
            release_date:Datatypes.DATE
    },{
        timestamps:false
    });
    return movie
}