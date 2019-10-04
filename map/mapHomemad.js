


function map(array, callback){

    let result = [];

    for(let element of array){

        result.push(callback(element));
    }

    return result;
}

const resultat = map([1,2,3], (number) => {
    return number*3;
})

console.log(resultat);
