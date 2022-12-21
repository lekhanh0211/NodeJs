import pool from "../config/connectDb";

let getAllP = async (req, res) => {
  const [row, field] = await pool.execute("Select  * from product");
  return res.status(200).json({
    message: "OK",
    data: row,
  });
};

let createNewP = async (req, res) => {
  let { Name, CatId, Price, SalePrice, Image, MoreImage, Status } = req.body;
  if (
    !Name ||
    !CatId ||
    !Price ||
    !SalePrice ||
    !Image ||
    !MoreImage ||
    !Status
  ) {
    return res.status(200).json({
      message: "Missing required param",
    });
  }
  await pool.execute(
    'Insert into product(Name,CatId,Price,SalePrice,Image,MoreImage,Status) value(?,?,?,?,?,?,?)'
  );
  return res.status(200).json({
    message: "OK",
  });
};

let updateP = async (req, res) => {
  let { Name, CatId, Price, SalePrice, Image, MoreImage, Status, Id } =
    req.body;
  if (
    !Name ||
    !CatId ||
    !Price ||
    !SalePrice ||
    !Image ||
    !MoreImage ||
    !Status ||
    !Id
  ) {
    return res.status(200).json({
      message: "Missing required param",
    });
  }
  await pool.execute(
    "Update product set Name=?,CatId=?,Price=?,SalePrice=?,Image=?,MoreImage=?,Status=? where Id=?"
  );
  return res.status(200).json({
    message: "OK",
  });
};
let deleteP = async (req, res) => {
  let id = req.params.Id;
  if (!id) {
    return res.status(200).json({
      message: "Missing required params",
    });
  }
  await pool.execute("Delete from product where id=?", [id]);
  return res.status(200).json({
    message: "Ok",
  });
};
module.exports = {
  getAllP,
  createNewP,
  updateP,
  deleteP,
};
