import inquirer from "inquirer";
import fs from "fs";
import { createRequire } from "module";
import express from "express";

const require = createRequire(import.meta.url);
const qr = require("qr-image");
const app=express()

app.use(express.static("public"))
app.use(express.json())

app.post("/generate",(req,res)=>{
    const url=req.body.url;
    const qrCode=qr.image(url,{type:"png"});
    const filePath="public/qrcode.png";
    const writeStream=fs.createWriteStream(filePath);
    qrCode.pipe(writeStream)
    writeStream.on("finish",()=>{
        res.json({success:true});
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
