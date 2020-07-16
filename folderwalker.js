  
var fs = require('fs');

console.log("requires loaded");

var WalkFolder = function(folder, fileext) {

    console.log(`checking directory: ${folder}`);  
    
    fs.readdir(folder, (err, records) => {
        records.forEach(function(record){
            console.log(`found: ${folder}/${record}`);                    
            fs.stat(`${folder}/${record}`, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    WalkFolder(`${folder}/${record}`, fileext);
                } else {                    
                    if(record.endsWith(fileext)){
                        fs.unlinkSync(`${folder}/${record}`);
                        console.log(`[ DELETED: ${folder}/${record} ] ---------------------------------------------------------------------------<<<`);                                
                    }
                }
            });
        });
    });
};

var foldername = process.argv.slice(2)

WalkFolder(`./${foldername}`,'.map');

// execute it like this:  > node folderwalker ClientApp
