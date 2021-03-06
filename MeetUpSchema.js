const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeetUpSchema = new Schema({
    title:{type:String},
    image:{type:String},
    address:{type:String},
    description:{type:String}
}, {timestamps:true})

module.exports = mongoose.model('MeetUp', MeetUpSchema)