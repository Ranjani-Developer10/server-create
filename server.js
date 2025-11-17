const express = require('express');
const app=express();
const dotenv=require('dotenv');

const PORT=process.env.PORT||5000;
// const PORT=process.env.PORT||5000;--port running


app.get('/',(req,res)=>{
    res.send('sever is ready');
})

dotenv.config();

app.listen(PORT,()=>{
    console.log(`server iss running on port',${PORT}`);
        })

