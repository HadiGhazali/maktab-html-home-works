a = [1, 'has', 3, 4]


//first_function
function DeleteByIndex1(arr, index) {
    let changed_arr = []
    for (let x of arr) {
        if (arr[index] !== x) {
            changed_arr.push(x)
        }
    }
    return changed_arr
}


//second function
function DeleteByIndex2(arr, number) {
    arr = arr.filter((index) => index !== number)
    return arr
}

console.log(DeleteByIndex2(a, 3))
console.log(DeleteByIndex1(a, 3))
