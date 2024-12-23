const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already registered"]
    },
    mobile:{
        type:Number,
        required:true,
        unique:[true,"Number already registered"],
        min:10
    },
    aadharNumber:{
        type:Number,
        required:true,
        unique:[true,"Account already exists with same Aadhar Number"],
        min:12
    },
    panCard:{
        type:String, 
        unique:[true,"Account already exists with same Aadhar Number"]
    },
    password:{
        type:String,
        required:true,
        min:[8,"password should contain atleast digits"]
    },
    BookedRoomNo:{
        type:Number
    },
    
    Active:{
        type:Boolean
    },
    adminApproval:{
        type:Boolean
    }

});

const register=new mongoose.model('register',userSchema);

module.exports=register;