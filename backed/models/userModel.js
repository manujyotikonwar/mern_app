const mongoose=require('mongoose');
//crerat schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
    },
    
},
{
    timestamps: true // This is correct
}
)

// creat model 
// mongoose.model('model name' , schema name)
// 
const User =mongoose.model('User',userSchema)
module.exports=User;