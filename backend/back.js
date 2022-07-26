const express = require("express");
const mongoose = require("mongoose");
const ko = require("./key.js")
const key = ko;

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
mongoose.connect(
key.ko,
  { useNewUrlParser: true }
);
//j

const itemSchema = {
  name: String,
};
const Item = mongoose.model("todoItem", itemSchema);
const item1 = new Item({
  name: "Welcome to todolist",
});
const item2 = new Item({
  name: "hit  the + button to add new item",
});
const item3 = new Item({
  name: "hit (delete) to delete item",
});
let k = [{_id:"1",name:"s",__v: 0},{_id:"2",name:"s",__v: 0},{_id:"27",name:"s",__v: 0}]

const defaulitem = [item1, item2, item3];

app.get("/already", function (req, res) {
  Item.find({}, function (err, founditem) {
    if (founditem.length === 0) {
      res.send({founditem})
    
    } else {
      res.send({founditem})
    }
  });
});

app.post("/save", function (req, res) {
  const itemname = req.body.F1;

  const item = new Item({
    name: itemname,
  });
  item.save();
  res.send({ message: "saved" });
});

app.delete("/delete/:id", function (req, res,next ) {
  const checklist = req.params.id;

  Item.findByIdAndRemove(checklist, function (err) {
   next()
  })
});

app.listen(3003, function () {
  console.log("Server started on port 3003");
});
