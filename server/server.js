const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =3001;
const route = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/', route);
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})