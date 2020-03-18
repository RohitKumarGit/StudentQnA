const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : String,
    email:{
        type:String,
        required:true
    },
    role:String,
    college:{
        type:String,
        default:"none"
    },
    profileUrl:String,
    points : {
        type:Number,
        default:500
    },
    class:{
        type:String,
        default:"college"
    },
    branch:{
        type:String,
        default:"none"
    },
    yearOfAdmission:{
        type:String,
        default:"none"
    }
});

userSchema.statics.getUser = async function(email){
    console.log(email)
    const user =await User.findOne({email});
    console.log(user)
    return user;
}
userSchema.statics.createUser = async function(details){
    const ms = await User.find({email:details.email});
    console.log('yes',ms);
    if(ms.length == 0){
        const user = new User(details);
        await user.save()
        console.log("no error")
        return false;
        
    }
    else{
        console.log("has error")
        return true
    }
    
}
userSchema.statics.deductPoint = async function(email,point){
   
    const user =await User.findOne({email});
    console.log(user)
    console.log(point)
    const x = user.points - point

    user.points = x;
    console.log(user)
    await user.save()
}
const User =new  mongoose.model('User',userSchema);
module.exports = User