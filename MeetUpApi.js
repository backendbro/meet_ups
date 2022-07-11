const MeetUpSchema = require('./MeetUpSchema')
const express = require('express')
const connectDb = require('./database')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
connectDb()

// this makes it posible to receive json and form data
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
    console.log(`port ${port} connected..`)
})

// post route
app.post('/meetup', async (req,res) => {
    const newMeetUp = {
        title:req.body.title,
        image:req.body.image,
        address:req.body.address,
        description:req.body.desc
    }

    // to create a new meet up 
    const meetup = await MeetUpSchema.create(newMeetUp)
    console.log(meetup)
    res.status(200).json(meetup)
})

// this will get all meetups
app.get('/getmeetups', async (req,res) => {
    const meetups = await MeetUpSchema.find()
    console.log(meetups)
    res.status(200).json(meetups)
})

// this will get a particular meetup
app.get('/getmeetups/:id', async(req,res) => {
    const meetUpId = req.params.id
    const meetup = await MeetUpSchema.findById(meetUpId)
    console.log(meetup)
    res.status(200).json(meetup)
})