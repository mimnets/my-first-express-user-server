const express = require('express')
const app = express()
const port = 5000
const users = require('./users.json')
const cors = require('cors')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello World! from Monirul Islam');
})

// I have my own API data with showing in my server
app.get('/users', (req, res)=>{
    res.send(users)
})
// Now I am using params to load data dynamically selected
app.get('/users/:id', (req, res)=>{
    // console.log('the selected user id is:', req.params.id)
    const id = parseInt(req.params.id)
    console.log(id)
    const user = users.find(us => us.id === id)
    res.send(user)
})
app.listen(port, () =>{
    console.log(`The server is running at port: ${port}`)
})