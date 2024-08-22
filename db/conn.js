const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/suggestions")
.then(()=>{
    console.log('Connection success');
}).catch((e)=>{
    console.log('connection lost!')
})

