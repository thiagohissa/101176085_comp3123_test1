// Lab Test 1
// Thiago Maciel Hissa
// 101176085

const fs = require('fs');

function getFiles(){
    return fs.readdirSync('./Logs');
}

function createFiles(){
    for(let i = 0; i<10; i++){
        let filename = "log" + i + ".txt";
        fs.open(`./Logs/${filename}`, 'w', function (err, file) {
            if (err) throw err;
            fs.write(file, 'howdy', function (err) {
                if (err) throw err;
                fs.close(file, function() {
                    console.log(filename);
                });
            });
        });
    }
}

function deleteFiles(files){
    for(let i = 0; i<files.length; i++){
        fs.unlink(`./Logs/${files[i]}`, function (err) {
            if (err) throw err;
            console.log(`deleting file... ${files[i]}`);
        });
    }
}

let files = getFiles();

if(files.length > 0){
    deleteFiles(files);
}
else{
    createFiles();
}


