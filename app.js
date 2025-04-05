const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure views folder is correctly referenced
app.use(express.static(path.join(__dirname, "public")));
// Route
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});
app.get("/sector", (req, res) => {
	res.render("sector");
});
app.get("/about", (req, res) => {
	res.render("about");
});
app.get('/team', (req, res) => {
    res.render('team');
  });
app.get('/show', (req, res) => {
    res.render('show');
  });

app.get('/service', (req, res) =>{
    res.render('service');
})
app.get('/show1', (req, res) =>{
  res.render('show1');
})
app.get('/show2', (req, res) =>{
  res.render('show2');
})
app.get('/show2', (req, res) =>{
  res.render('show2');
})
app.get('/show3', (req, res) =>{
  res.render('show3');
})
app.get('/show4', (req, res) =>{
  res.render('show4');
})
app.get('/show5', (req, res) =>{
  res.render('show5');
})
app.get('/show6', (req, res) =>{
  res.render('show6');
})
app.get('/show7', (req, res) =>{
  res.render('show7');
})
app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
