const express=require('express');
const app=express();
const port=3000;
const path=require('path');

// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

app.post('/process',(req,res)=>{
    const userInput=req.body.user;
    console.log(`User input " :${userInput}`);
    res.send(`the data : ${userInput}`);


});














// const mynewobject ={
//     id:"12657",
//     name:"Programming Fundamentals 101",
//     purpose:"Programming",
// }

// const idobject=mynewobject.id;

// app.get('/',(req,res)=>{
//     res.send(idobject);
// });

app.listen(port,()=>{
    console.log(`Server is run this ${port}`)

});