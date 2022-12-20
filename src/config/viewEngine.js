import express from "express";

const configViewEngine = (app) => {
  //biến app ở đây là biến app instance đã truyền trong file config view

  //note:config static file cho folder public: set quyền truy cập
  app.use(express.static("./src/public"));

  //note:
  app.set('views', './src/views');
  app.set('view engine', 'ejs');

};
export default configViewEngine;
