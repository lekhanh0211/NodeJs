let getHomePage = (req, res) => {
  //Phần này để viết logic

  return res.render('index.ejs')
};
module.exports = {
  //để export nhiều phần tử cùng 1 lúc
  getHomePage,
};
