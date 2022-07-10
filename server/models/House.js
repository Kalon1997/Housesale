const mongoose = require('mongoose')
const { Schema } = mongoose;
const houseSchema = new mongoose.Schema({
    agreementType: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    imgs: [],
    pinCode: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    interestedPeopleList:[
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})
module.exports = mongoose.model("House", houseSchema);