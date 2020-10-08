// Lab Test 1
// Thiago Maciel Hissa
// 101176085

const fs = require('fs');

function checkFiles(){
    if (!fs.existsSync('./Logs')){
        fs.mkdirSync('./Logs');
    }
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
    fs.rmdir('./Logs', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        files.forEach((file) =>{ console.log(`deleted file: ${file}`); })
    });
}

let files = checkFiles();

if(files.length > 0){
    deleteFiles(files);
}
else{
    createFiles();
}


