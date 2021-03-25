const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');        
const { json } = require('body-parser');
const approuter = require ('./Route/router');
const cors =require('cors')



const hostname = 'localhost';
const port = 7001;;

const app = express();
app.use(cors())
app.options('*', cors())


app.use(bodyParser.json()); 

app.use('/' , approuter);








mongoose.connect('mongodb+srv://Radha_24:radha1998@cluster0.hkwaq.mongodb.net/Todo_List?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    // starting the server using the listen function
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
        console.log("Connection has been created.....")
    });
}).catch(err => {
    console.log(err);
})