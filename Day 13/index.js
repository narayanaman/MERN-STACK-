const express=require("express");
const app=express();

app.use(express.json());


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

app.post("/api/students",(req,res)=>{
    console.log(req.body);
    // students.push(req.body);

    //const{id,name,city}=req.body;
    //const newStudent = {
    //     id:id,
    //     name:name,
    //     city:city
    // };
    const newStudent = {
        id:req.body.id,
        name:req.body.name,
        city:req.body.city
    };

    students.push(newStudent);
    res.json({
        message:"Record Added Successfully",
        data:req.body,
        students:students
    });
});

//UPDATE RECORD
app.put("/api/students/:id",(req,res)=>{
    const {id}= req.params;
    const student = students.find(s=>s.id == id);
    if(!student){
        return res.json({
            message:"Invalid Student ID"
        });
    }
    console.log("OLD STUDENT",student);
    student.name=req.body.name;
    student.city=req.body.city;
    res.json({
        message:"Student Record Updated",
        student
    });
});

app.delete("/api/students/:id",(req,res)=>{
    const {id}=req.params;
    students=students.filter(s=>s.id!=id);
    res.json({
        message:"Record Deleted",
        data:students
    })
});


app.listen(5001,() => {
    console.log("Server Started at 5001");
});