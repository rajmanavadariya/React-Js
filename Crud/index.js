const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let studentData = [
  {
    id: 1,
    name: "suman",
  },
  {
    id: 2,
    name: "khush",
  },
];

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

const middleware = async (req, res, next) => {
  if (req.query.age && Number(req.query.age) >= 18) {
    next();
  } else {
    res.redirect("/");
  }
};

app.get("/", (req, res) => {
  res.render("index1", {
    student: studentData,
  });
});

app.post("/insertData", (req, res) => {
  const { id, name } = req.body;
  let obj = {
    id: Number(id),
    name: name,
  };
  studentData.push(obj);
  res.redirect("/");
});

app.get("/deleteData", (req, res) => {
  const id = Number(req.query.userid);
  studentData = studentData.filter((el) => el.id !== id);
  res.redirect("back");
});

app.get("/editData", (req, res) => {
  let userid = Number(req.query.userid);
  let data = studentData.filter((el) => el.id === userid);
  console.log(data);
  return res.render("edit", {
    editrecord: data[0],
  });
});

app.post("/editData", (req, res) => {
  const editid = Number(req.body.editid);

  studentData = studentData.map((el) => {
    if (el.id === editid) {
      el.name = req.body.name;
    }
    return el;
  });
  res.redirect("/");
});

app.get("/home", middleware, (req, res) => {
  res.render("Home");
});

app.get("/admin", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(7000, () => {
  console.log("server listen on port 7000");
});
