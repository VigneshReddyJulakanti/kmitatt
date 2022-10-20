const mongoose=require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    sid : {
        type : String,
        required : true
    },
    name:{
        type:String,
        
    },
    rno : {
        type : String,
        required : true,
        unique : true
    },
    percentage : {
        type : String,
        required : true
    },
    date: {
        type : Date,
        default : Date.now 
    }
    
});

module.exports = mongoose.model("student",UserSchema)