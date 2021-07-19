const path = require('path')

//export to use in server.js
module.exports = (app) => {
    //initial homescreen
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
    //notes page
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
    //all other requests direct to homepage
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
}
