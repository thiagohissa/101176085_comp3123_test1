// Lab Test 1
// Thiago Maciel Hissa
// 101176085

function lowerCaseWords(arr){
    return new Promise(((resolve, reject) => {
        arr = arr.filter(element => typeof element === "string");
        arr = arr.map(element => element.toLowerCase());
        resolve(arr);
    }));
}

let arr = ["STR", 5, true, "STR"];
arr = lowerCaseWords(arr).then((arr) =>{
    console.log(arr); // [ 'str', 'str' ]
});