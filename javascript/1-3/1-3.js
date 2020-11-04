c =[2,3,[1,2],[[[1,2],2],5],6]

// console.log(typeof a)
const b =[]
function flat(arr){
    for (let x of arr){
        if (typeof x!=="object"){
            b.push(x)
        }
        else {
            flat(x)
        }
    }
    return b
}

console.log(flat(c))