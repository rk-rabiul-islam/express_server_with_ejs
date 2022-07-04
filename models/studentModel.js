const mongoose = require('mongoose');


// Create student data schema
const studentSchem = mongoose.Schema({

    name :{
        type  : String,
        required : [true, "Name is required"],
        trim : true
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true
    },
    phone : {
        type : String,
        required : [true, "Phone Number is repuired"],
        unique  : true
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }

},{
    timestamps : true
});
// export model
module.exports = mongoose.model('Student', studentSchem);