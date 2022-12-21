import pool from "../config/connectDb";

let getProPage = async (req, res) => {
  const [row, field] = await pool.execute("SELECT * FROM product");
  return res.render("product.ejs", { listPro: row, test: "abc string test" });
};
let getDetailPage = async (req, res) => {
  let pId = req.params.id;
  let [user] = await pool.execute(`select * from product where id = ?`, [pId]);
  return res.send(JSON.stringify(user));
};
let createNewPro = async (req, res) => {
  let { Name, CatId, Price, SalePrice, Image, MoreImage, Status } = req.body;

  await pool.execute(
    "insert into product(Name, CatId, Price, SalePrice,Image,MoreImage,Status) values (?, ?, ?, ?,?,?,?)",
    [Name, CatId, Price, SalePrice, Image, MoreImage, Status]
  );

  return res.redirect("/product");
};

module.exports = {
  getProPage,
  getDetailPage,
  createNewPro,
};
