import pool from "../config/connectDb";

// let getCatePage = (req, res) => {
//   //Phần này để viết logic
//   let data = [""];
//   connection.query("SELECT * FROM `Category`", function (err, rs, field) {
//     rs.map((row) => {
//       data.push({
//         id: row.Id,
//         name: row.Name,
//         url: row.Url,
//         status: row.Status,
//       });
//     });
//     console.log("Check data Category", data);
//   });
//   //return res.render("user.ejs", { data });

//   return res.render("category.ejs", { dataCate: data });
// };

let getCatePage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM category");

  return res.render("category.ejs", {
    dataCate: rows,
    test: "abc string test",
  });
};
let getDetailPage = async (req, res) => {
  let catId = req.params.id;
  let [cate] = await pool.execute(`select * from category where id = ?`, [catId]);
  return res.send(JSON.stringify(cate));
};
let createNewCate = async (req, res) => {
    // let { Name, Url } = req.body;

    // await pool.execute('insert into category(Name, Url) values (?, ?, ?)',
    //     [Name, Url]);

   // return res.redirect('/category');
   console.log('>>Check Requesy',req.body)
    return res.send('Check post');

}
module.exports = {
  getCatePage,
  getDetailPage,
  createNewCate 
};
