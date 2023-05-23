const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const toDoList = [];




app.get("/", (req, res)=> {
    res.render('index', {list: toDoList})
    
})


app.post("/", (req,res)=> {
   
    if(/^\s*$/.test(req.body.listItem)){
       res.redirect("/"); 
    }
    else{
    toDoList.push(req.body.listItem);
    res.redirect("/");
    }
})


app.listen(3000, console.log("Server started @ Port: 3000"));