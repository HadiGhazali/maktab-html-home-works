a = ['a', 'b', 'b', 'c', 'd', 'a', 'r']

function DuplicateItemOfArr(arr){
    arr = [...new Set(arr)]
    return arr
}

console.log(DuplicateItemOfArr(a))