const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    Posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Property'
    }]
},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    if(!this.isModified){
        next();
    }
    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.matchPassword=async function (pass){
    return await bcrypt.compare(pass,this.password);
}
const User=mongoose.model("User",userSchema);
module.exports=User;