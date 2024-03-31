const express=require("express");
const app=express();
const zod=require("zod");
const schema=zod.array(zod.number());
// app.get("/health-checkup",(req,res)=>{
//   const username=req.headers.username;
//   const pass=req.headers.pass;
//   const kidid=req.query.kidid;
//   if(username=="shubh"&&pass=="passw")
//   {if(kidid==1||kidid==2){
//     res.json({
//         msg:"your kidney is fine"
//     });
// }
//   }
//   res.status(400).json({
//     msg:"something up with your inputs"
//   });
// });
app.use(express.json());
app.post("/health-checkup",(req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json()
        msg:"input is invalid"
    }
    else{
    res.send({
        response
    })
}
    // const kidneylength=kidneys.length;
    // res.send("you have "+kidneylength +" kidneys");

});
//global catches
// app.use((err,req,res,next)=>
// {
//  res.json({
//     msg:"Sorry something is up with our server"
//  })   
// })
app.listen(3000);