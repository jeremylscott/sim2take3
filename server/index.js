require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {json} = require('body-parser')
const port = 4004
app.use(json())


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('Database Connected');
    }).catch(err => console.log(err))





app.listen(port, () => console.log(`Server listening to port: ${port}`))