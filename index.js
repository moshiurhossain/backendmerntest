require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const dbConfig = require('./db/dbConfig')
const globalErrorHandler = require('./utilities/globalErrorHandler')
const cookieParser = require('cookie-parser')
const port = process.env.PORT_URL || 5000



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())





// route connecting middleware
// http://localhost:8080
app.use('/', require('./router'))
// error handler // error handler should be under all routes
app.use(globalErrorHandler)

// db config
dbConfig()



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})