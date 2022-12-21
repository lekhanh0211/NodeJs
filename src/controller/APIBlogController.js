import pool from "../config/connectDb";

let getAllBlog = async (req, res) => {
  const [row, field] = await pool.execute("Select  * from blog");
  return res.status(200).json({
    message: "OK",
    data: row,
  });
};

let createNewBlog = async (req, res) => {
  let { Name, Title, Content } = req.body;
  if (!Name || !Title || !Content) {
    return res.status(200).json({
      message: "Missing required param",
    });
  }
  await pool.execute("insert into blog(Name,Title,Content) values (?,?,?)", [
    Name,
    Title,
    Content,
  ]);
  return res.status(200).json({
    message: "OK",
  });
};

let updateBlog = async (req, res) => {
  let { Name, Title, Content, Id } = req.body;
  if (!Name || !Title || !Content || !Id) {
    return res.status(200).json({
      message: "Missing required param",
    });
  }
  await pool.execute("Update blog set Name=?,Title=?,Content=? where Id=?", [
    Name,
    Title,
    Content,
    Id,
  ]);
  return res.status(200).json({
    message: "OK",
  });
};
let deleteBlog = async (req, res) => {
  let bid = req.params.id;  //id<=>tương đương với id bên đường dẫn ở webjs
  if (!bid) {//k truyển lên id nó sẽ báo lỗi
    return res.status(200).json({
      message: "Missing required params",
    });
  }
  await pool.execute("Delete from blog where Id=?", [bid]);
  return res.status(200).json({
    message: "Ok",
  });
};
module.exports = {
  getAllBlog,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
