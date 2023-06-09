const express = require('express');
const app = express();
const currentDate = require(__dirname + "/date.js");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');


 

    


const toDoList = [];




app.get("/", (req, res)=> {
    
    let currentDay = currentDate();
    
    res.render('index', {list: toDoList, currentDay: currentDay});
    
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


app.post('/delete/:index', (req, res) => {
    const todoId = req.params.index;
  
    
    toDoList.splice(todoId, 1);
    res.redirect('/'); 
  });


app.listen(5000, console.log("Server started @ Port: 5000"));