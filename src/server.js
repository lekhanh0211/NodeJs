const express = require("express");
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./router/web";
import initAPIRoute from "./router/api";
import { resolveShowConfigPath } from "@babel/core/lib/config/files";
//import connection from './configs/connectDB';

//note khai báo dotenv để sd bên dưới
require("dotenv").config();

var morgan = require('morgan');


//note
const app = express();
const port = process.env.PORT;

app.use((req,res)=>{
  console.log('>> Run into my middleware');
  console.log(req.method);
})

//note : Setup view engine
configViewEngine(app);

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//note : Init web route
initWebRoute(app);

//note : Init api route

initAPIRoute(app);

//handle 404 not found
 // lưu ý viết theo thứ tự vì nó chạy  từ trên xuống dưới
app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
