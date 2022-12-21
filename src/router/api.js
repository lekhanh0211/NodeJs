import express from "express";
import APIController from "../controller/APIController";
import APIBlogController from "../controller/APIBlogController"

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/product", APIController.getAllP); // method GET -> READ data
  router.post("/create-product", APIController.createNewP); // method POST -> CREATE data
  router.put("/update-product", APIController.updateP); //method PUT -> UPDATE data
  router.delete("/delete-product/:id", APIController.deleteP); //method DELETE -> DELETE data

  router.get("/blog", APIBlogController.getAllBlog); // method GET -> READ data
  router.post("/create-blog", APIBlogController.createNewBlog); // method POST -> CREATE data
  router.put("/update-blog", APIBlogController.updateBlog); //method PUT -> UPDATE data
  router.delete("/delete-blog/:id", APIBlogController.deleteBlog); //method DELETE -> DELETE data

  return app.use("/api/v1/", router);
};
export default initAPIRoute;
