import pool from "../config/connectDb";

// let getUserPage = (req, res) => {
//   //Phần này để viết logic
//   let data = [""];
//   connection.query("SELECT * FROM `user`", function (err, rs, field) {
//     rs.map((row) => {
//       data.push({
//         id: row.Id,
//         name: row.Name,
//         userName: row.UserName,
//         password: row.Password,
//         status: row.Status,
//       });
//     });
//     console.log("Check data", data);
//   });
//   //return res.render("user.ejs", { data });

//   return res.render("user.ejs", { dataUser: data });
// };

let getUserPage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM user");

  return res.render("user.ejs", { dataUser: rows, test: "abc string test" });
};
let createNewUser = async (req, res) => {
  let { Name, UserName, Password, Status } = req.body;

  await pool.execute(
    "insert into user(Name, UserName, Password, Status) values (?, ?, ?, ?)",
    [Name, UserName, Password, Status]
  );

  return res.redirect("/user")
};
module.exports = {
  //để export nhiều phần tử cùng 1 lúc
  getUserPage,
  createNewUser,
};
