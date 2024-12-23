const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    RoomNumber:{
        type:Number
    },
    floor:{
        type:Number
    },
    CardNumber:{
        type:Number
    },
    CVV:{
        type:Number
    }
});

const ExtendRoom=new mongoose.model('ExtendRoom',userSchema);

module.exports=ExtendRoom;