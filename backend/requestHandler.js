import userSchema from './model/user.model.js'
export async function adduser(req,res){
    const {name}=req.body;
    const profile=req.file

    const result =await userSchema.create({name,profile})
    res.status(200).send({result:result})
}