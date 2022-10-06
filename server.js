const express = require('express');
const methodOverride = require('method-override');
const mongoConfig = require('./config')

require('dotenv').config()

const app = express();

const microRoutes = require('./routes/microRoutes')





const port = process.env.PORT;



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(__dirname + '/public'));
//MiddleWare
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())
app.use('/micro', microRoutes)








app.listen(port, () =>{console.log('Listening on port:', port)})


mongoConfig();
