import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    name:{type:String},
    profile:{type:Object}
})

export default mongoose.model.users || mongoose.model("user",userSchema); 