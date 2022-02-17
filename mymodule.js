function myModule(filePath,fileExt,callback){    
    const fs = require('fs');
    const path = require('path');

    fs.readdir(filePath,function(err,filesName){
        if(err) return callback(err);
        let list = [];
        filesName.forEach(file=>{
            if(path.extname(file) === "." + fileExt){
                list.push(file);
            }
        })
        callback(null,list);
    })
}
module.exports = myModule;