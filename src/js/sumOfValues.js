function sumOfValues(obj){
    // concat 4 strings of cardcode inputs
    let sum = '';  
    for(let i of [0,1,2,3]){
        sum += obj[i].value;
        }
    return sum
}

export default sumOfValues