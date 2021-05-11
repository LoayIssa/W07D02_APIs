const express = require("express");
const app = express();
const port = 1000;

app.use(express.json());

const users =  todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

app.get("/todos", (req, res) => {
  res.status(200);
  res.json(todos);
});

app.post("/create/todo" , (req,res) => {
    const newlist = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    todos.push(newlist);
    res.status(201);
    res.json(todos);
})
app.put("/update/todo/:name",(req,res)=>{
 const name = req.params.name
 for (let i=0 ; i<todos.length;i++){
     if(todos[i].todo===name){
        todos[i].todo = req.body.todo
        res.status(201);
        res.json(todos);
        return
     }


 }
 res.status(404);
 res.json("not found");


});
app.delete("/delete/todo/:name" , (req ,res)=>{
  const name =req.params.name
  for(i=0; i<todos.length ; i++){
    if(todos[i].todo===name){
      todos[i].todo=req.body.todo
      res.status(201)
      res.json(splice(i,1)[0])
      return
    }
  }
  res.status(404);
 res.json("not found");
}); 

app.put("/complete/todo/:name", (req, res) => {
  const name = req.params.name;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].todo === name) {
      todos[i].isCompleted = true;
      res.status(200);
      res.json(todos);
      return;
    }
  }
  res.status(404);
  res.json("not found");
});


app.get(("/completed/todos"),(req,res)=> {
    const found = todos.filter((element,index) =>{
        return element.isCompleted === true
    })

    if (found.length!=0){
        res.status(200);
        res.json(found);
    }else
    res.status(404);
    res.json("not found");
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});