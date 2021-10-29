const {readFile, writeFile} = require('fs');


readFile('./content/first.txt','utf8',(error,result) => {
    if(error){
        console.log(error);
        return
    }
   const first = result;
   readFile('./content/seconde.txt','utf8',(error, result) =>{
       if(error){
        console.log(error);
        return
       }
       const second = result;
       writeFile('./content/resultASync.txt',`Here is the result ${first} and ${second}`,(err, result) =>{
           if(err){
               console.log(err);
               return
           }
           console.log(result);
       });
   })
});





