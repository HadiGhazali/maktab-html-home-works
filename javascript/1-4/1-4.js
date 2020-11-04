a = [1, 2, 1, 3, 4, 7]

function FindByItem(arr,n){
    let i =0
    let index = []
    for (let item of arr){
        if (item === n){
            index.push(i)
        }
        i++
    }
    return `{index:${index},item:${n}}`
}
console.log(FindByItem(a,1))