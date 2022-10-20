const mongoose=require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    sid : {
        type : String
    },
    date: {
        type : Date,
        default : Date.now 
    }
    
});

module.exports = mongoose.model("LastUpdate",UserSchema)