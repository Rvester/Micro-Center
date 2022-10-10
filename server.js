const express = require('express');
const methodOverride = require('method-override');
const mongoConfig = require('./config')



const microRoutes = require('./routes/microRoutes')

require('dotenv').config()


const app = express();





app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

//MiddleWare
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())
app.use('/micro', microRoutes)







const port = process.env.PORT;

app.listen(port, () =>{console.log('Listening on port:', port)})


mongoConfig()
