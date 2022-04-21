// use express object
const express = require('express')
// Express app
const app = express()
app.use(express.json())
const port = 3000

// Use express's GET method for this endpoint
// HTTP methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Explorers API GET ALL requests ${new Date()}`)
    // Create some objects and return the array
    const explorer1 = {id: 1, name:'Monika1'}
    const explorer2 = {id: 2, name:'Monika2'}
    const explorer3 = {id: 3, name:'Monika3'}
    const explorer4 = {id: 4, name:'Monika4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    // Add HTTP CODE 200 in the request
    res.status(200).json(explorers)
})

// Initialize app
app.listen(port, () => {
    console.log(`Example app, Monika, listening on port ${port}`)
})