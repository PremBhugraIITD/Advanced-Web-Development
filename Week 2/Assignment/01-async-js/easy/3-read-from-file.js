const fs = require("fs");

fs.readFile("test.txt","utf-8",(err,data)=>{
    console.log(data);
    for(let i=0;i<10000000000;i++){}
    console.log("Kirmada");
});