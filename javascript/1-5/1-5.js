a = ['a', 'b', 'c', 'd', 'a', 'r']

function ReplaceByItem(arr, current_item, new_item){
        arr = arr.map((item)=>{
        if (item===current_item){
            item = new_item
            return item
        }
        return item
    })
    return arr
}
console.log(ReplaceByItem(a, 'a', 'eee'))
