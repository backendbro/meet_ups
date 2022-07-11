const mongoose = require('mongoose')
const connectDb = async () => {
    const conn = await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log(`mongodb connected: ${conn.connection.host}`)
}
module.exports = connectDb;