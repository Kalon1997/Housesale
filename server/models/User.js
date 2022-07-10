const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    // firstName:{
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String
    // },
    username: {
        type: String,
        required: true,
    },
    // phoneNo: {
    //     type: Number,
    //     require: true
    // },
    // city:{
    //     type: String,
    //     required: true
    // },
    // pincode:{
    //     type: Number,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    myInterestList:[
        {
            type: Schema.Types.ObjectId,
            ref: "House"
        }
    ],
    myNotifications:[]
    // role:{
    //     type: String,
    //     default: 'user',
    //     required: true
    // }
},
{ timestamps: true }
)


userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
        next();
    else
        this.password = await bcryptjs.hash(this.password,10)    
})

userSchema.methods.matchPassword = async function(password) {
    return bcryptjs.compare(password, this.password);
}

userSchema.methods.generateJWT = function() {
    return jwt.sign({ _id: this._id }, process.env.JWTSecret)
}

module.exports = mongoose.model("User", userSchema);