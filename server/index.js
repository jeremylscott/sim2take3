require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {json} = require('body-parser')
const port = 4004
const {getListings,addListing,removeListing,changeListing} = require('./controller')
app.use(json())


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('Database Connected');
    }).catch(err => console.log(err))

app.get('/api/listing', getListings)
app.post('api/listing', addListing)
app.delete('/api/listing/:id', removeListing)
app.put('/api/listing/:id', changeListing)


app.listen(port, () => console.log(`Server listening to port: ${port}`))