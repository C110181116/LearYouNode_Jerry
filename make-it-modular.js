const mymodule = require('./mymodule');
mymodule(process.argv[2],process.argv[3],function callback(err,filesName){
    if(err) console.log(err);
    filesName.forEach(fileName => {
        console.log(fileName);
    })
})