// const express=require("express");
// const app=express();
// // function sum(n){
// //     let ans=0;
// //     for(let i=1;i<=n;i++)
// //     {
// //         ans=ans+i;
// //     }
// //     return ans;
// // }
// app.get("/",function(req,res){
//     // const n=req.query.n;
//     // const ans=sum(n);
//     // res.send("hi answer is "+ ans);
// })
// app.listen(3000);
const express=require("express");
const app=express();
const user=[{
    name:"John",
    kidneys: [{
        healthy:false
    }
    ]
}];
app.use(express.json());
app.get("/",function(req,res){
    const johnkidneys=user[0].kidneys;
    const numofkid=johnkidneys.length;
    let numberofhealkid=0;
    for(let i=0;i<johnkidneys.length;i++)
    {
        if(johnkidneys[i].healthy)
        {
            numberofhealkid=numberofhealkid+1;
        }
    }
    const numofunhealkid=numofkid-numberofhealkid;
    res.json({
        numofkid,
        numberofhealkid,
        numofunhealkid
    })


})
app.post("/",function(req,res){
    const isheal=req.body.isheal;
    user[0].kidneys.push({
        healthy:isheal

    })
    res.json({
        msg:"Done"
    }
    )
})
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        user[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req,res){
    // for(let i=0;i<user[0].kidneys.length;i++)
    // {
    //     user[0].kidneys[i].healthy=true;
    // }
    const newkidneys=[];
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        if(user[0].kidneys[i].healthy)
        {
            newkidneys.push({
                "healthy":true
            })
        }
    }
    user[0].kidneys=newkidneys;
    res.json({msg:"done"});
})
app.listen(3000);


