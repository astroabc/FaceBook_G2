const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

//MongoDB Connection
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://holigan:6m7vkNXQ3EV5T7Pi@todoapp.fxaeffp.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const authRoute = require('./routes/authRoute.js')
app.use('/api', authRoute)
const postRoute = require('./routes/postRoute')
app.use('/api', postRoute)
const userRoute = require('./routes/userRoute')
app.use('/api', userRoute)

const PORT = process.env.PORT || 3003
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))