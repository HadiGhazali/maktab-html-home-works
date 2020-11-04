str = 'I have 2 apples and 3 pineapples'

function ExtractNumFromStr(str) {
    str = str.split(' ')
    str = str.filter((item)=> !isNaN(item))
    str = str.map((item)=> + item)
    return str
}

console.log(ExtractNumFromStr(str))
