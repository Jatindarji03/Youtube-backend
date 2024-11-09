import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

// we config which type of data we need to take what is the limit
app.use(express.json({ limit: '16kb' }))
//when the data come from url
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
//when we want to store file image in our public folider
app.use(express.static('public'))
//when  we want cookie from user browser 
app.use(cookieParser())

export { app }

 