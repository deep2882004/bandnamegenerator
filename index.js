import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let post = { title: "", text: "" };

app.get("/", (req, res) => {
  res.render("home.ejs", {
    post: post,
  });
});

app.get("/home", (req, res) => {
  res.render("home.ejs", {
    post: post,
  });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/getpost", (req, res) => {
  const title = req.body.Blogtitle;
  const text = req.body.Blogtext;

  post = { title, text };

  res.redirect("/home");
});

app.post("/editpost", (req, res) => {
  const title = req.body.titlechange;
  const text = req.body.textchange;

  post = { title, text };
  res.redirect("/home");
});

app.post("/edithepost", (req, res) => {
  res.render("edit.ejs", { post });
});

app.post("/deletepost", (req, res) => {
  post = { title: "", text: "" };

  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`listning to the port ${port}`);
});
