// use express object
const express = require('express')
// Express app
const app = express()
app.use(express.json())
const port = 3000

// Initialize app
app.listen(port, () => {
    console.log(`Example app, Monika, listening on port ${port}`);
})