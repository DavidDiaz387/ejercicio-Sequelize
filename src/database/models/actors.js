module.exports = (sequelize,Datatypes)=>{
    let actor = sequelize.define(
        "actor",
        {
            first_name:Datatypes.STRING,
            last_name:Datatypes.STRING,
            rating:Datatypes.DECIMAL
        },
        {
            timestamps:false
        }
    )
    return actor
}