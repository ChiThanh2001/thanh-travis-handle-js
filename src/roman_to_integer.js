let I = 1
let V = 5
let X = 10
let L = 50
let C = 100
let D = 500
let M = 1000
var romanToInt = function (s) {
    let arr = []
    for (let i of s){
        if(i === 'I'){
            i = I
        }
        if(i === 'V'){
            i = V
        }
        if(i === 'X'){
            i = X
        }
        if(i === 'L'){
            i = L
        }
        if(i === 'C'){
            i = C
        }
        if(i === 'D'){
            i = D
        }
        if(i === 'M'){
            i = M
        }
        arr.push(i)
    } 
    for(let i=0 ; i<arr.length ; i ++){
        if(arr[i] < arr[i+1]){
            arr[i] = -arr[i]
        }
    }
    let sum =  arr.reduce((acc,num)=>{
        return acc += num
    })
    return sum
};

module.exports = romanToInt

// console.log(romanToInt('MCMXCIV'))