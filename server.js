const express = require ('express');
const app = express ();
const port = 3002;
const {workingTime} = require ('./middleware');




app.use(express.static(__dirname+'/public'))


app.get('/home',workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/home.html')
});
app.get('/about',workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/about.html')
});
app.get('/services', workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/services.html')
});
app.get('/contact', workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/contact.html')
});


app.listen (port, (err) => {
    if (err) {
        console.log (err)
    } else {
        console.log (`Go to localhost port : ${port}`)
    }
})