const fs = require('fs');

fs.readFile(process.argv[2], function callback(err,fileContents){
    if(err){
        console.log(err);
    }else{
        let lines = fileContents.toString().split('\n');
        console.log(lines.length - 1);
    }
})
