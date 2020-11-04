let a = [1, 2, 3, 5, 8]
let c = [0, 3, 4, 5]
let b = [5, 4]

function sort_and_contact(...arrays){
    let result=[]
    arrays.forEach(arr => result = result.concat(arr))
    result.sort(function(a, b){return a-b});
    return result
}

console.log(sort_and_contact(a,c,b))