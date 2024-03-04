import express from 'express' 
import mongoose from 'mongoose' 
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
// import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()


// Constants
const PORT = process.env.PORT || 3002
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
// app.use('/api/comments', commentRoute)
mongoose.set("strictQuery", false) 
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://kat:1212@cluster0.64c2alg.mongodb.net/mernblog?retryWrites=true&w=majority&appName=Cluster0',
        )



        app.listen(3002, () => console.log(`Server started on port: ${3002}`))
    } catch (error) {
        console.log(error)
    }
}


start()
