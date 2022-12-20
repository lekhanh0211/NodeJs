import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import categoryController from "../controller/categoryController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage); //có ngoặc để truyền tham số, k ngoặc thì mặc định những tham số của cha đk truyền thằng xuống con
  router.get("/user", userController.getUserPage);
  router.post("/create-user", userController.createNewUser);
  router.get("/category", categoryController.getCatePage);
  router.get("/detail/category/:id", categoryController.getDetailPage);
  router.post("/create", categoryController.createNewCate);

  return app.use("/", router); // tiền tố phía trước router sd viết api
};
export default initWebRoute;
