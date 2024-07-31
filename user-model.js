const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { nextTick } = require("process");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

//2nd method secure the password with bcrypt
userSchema.pre("save",async function(){
    const user = this;
    console.log("actual data",this);

    if(!user.isModified){
        return nextTick();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    }catch(error){
        return next(error);
    }
});


//json web token
userSchema.methods.generateToken = function(){
    try{
        return jwt.sign({
            //paylod
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        
        process.env.JWT_SECTECT_KEY,
        {
            expiresIn: "30d"
        }
        );
    }catch(error){
        console.error(error);
    }
}

const User = new mongoose.model("User",userSchema);

module.exports = User;