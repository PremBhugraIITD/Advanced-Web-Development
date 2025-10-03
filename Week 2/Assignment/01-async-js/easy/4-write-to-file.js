const fs = require('fs');

fs.writeFile("test.txt","Kya kar rahe ho",(err)=>{ //If file with this name is not already present then it is created and data is written into it.
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully");
    }
});