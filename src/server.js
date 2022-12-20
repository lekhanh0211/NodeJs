const express = require('express')
import configViewEngine from './config/viewEngine';
import initWebRoute from './router/web'
//import connection from './configs/connectDB';


//note khai báo dotenv để sd bên dưới
require('dotenv').config(); 


//note
const app = express()
const port = process.env.PORT;


//note : Setup view engine
configViewEngine(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//note : Init web route
initWebRoute(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

