const express = require('express');
const app = express(); 

const path = require("path");
const Suggestion = require("./db/suggestion");

require("./db/conn")

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'))


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

app.post('/', async(req,res)=>{
    try {
        const { name, email, suggestion } = req.body;
        const newSuggestion = new Suggestion({ name, email, suggestion });
        await newSuggestion.save();
        // res.send('Thank you for your suggestion!');
        res.sendFile(__dirname + '/views/ThankYou.html')
      } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting suggestion');
      }
});

app.listen(3000,()=>{
    console.log(`Server Started at port ${port}`);
})