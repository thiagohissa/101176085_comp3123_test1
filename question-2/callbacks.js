// Lab Test 1
// Thiago Maciel Hissa
// 101176085

function resolvedPromise(){
    return new Promise(((resolve) => {
        setTimeout(function(){
            let success = {message: 'delayed success'};
            resolve(success);
        }, 500);
    }));
}

function rejectedPromise(){
    return new Promise(((resolve, reject) => {
        setTimeout(function(){
            try{
                throw new Error('error: delayed exception');
            }
            catch (err) {
                return reject(err);
            }
        }, 500);
    }));
}

resolvedPromise().then((resolve =>{
    console.log(resolve);
})).catch(()=> { console.log("Something went wrong"); }); // catching for the sake of it

rejectedPromise().catch((err) => {
    console.log(err.message);
});