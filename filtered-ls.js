const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],function callback(err,fileName){
    if(err){
        console.log(err);
    }else{
        fileName.forEach(file =>{
            if(path.extname(file) == "." + process.argv[3]){
                console.log(file);
            }
        })
    }
})