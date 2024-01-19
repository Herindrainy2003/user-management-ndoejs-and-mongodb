const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nom :{
        type : String ,
        required : true 
    } ,
    email :{
        type : String ,
        required : true
    } ,
    numero :{
        type : String ,
        required : true 
    }
} ,
{
    timestamps : true ,
}
);

module.exports = mongoose.model('user' , userSchema);