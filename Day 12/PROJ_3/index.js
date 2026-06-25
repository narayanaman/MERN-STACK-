const express=require("express");
const app=express();

let students=[
    {id:1,name:"Aman",city:"Gorakhpur",age:70},
    {id:2,name:"Ram",city:"Ayodhya",age:75}
];

app.get("/api/students",(req,res)=>{
    res.json(students);
});

app.get("/api/students/:id",(req,res)=>{
    // const id=req.params.id;
    const {id} = req.params;
    const student =students.find(s => s.id == id);
    if(!student){
        return res.status(404).json({message:"Invalid ID"});
    }
    res.json(student);
});

app.listen(5001,() => {
    console.log("Server Started at 5001");
});