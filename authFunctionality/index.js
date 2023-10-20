const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5000
const DATABASE_USER = process.env.DATABASE_USER
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD

const app = express()

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@maincluster.e5okmwd.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch(e) {
    console.error(e)
  }
}

start()