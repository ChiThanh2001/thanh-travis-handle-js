const reverse = function(x) {
    if(x<0){
        const abs = Math.abs(x)
        const numReverse = Number(-abs.toString().split('').reverse().join(''))
        if(numReverse <= Math.pow(-2,31) || numReverse >= Math.pow(2,31) - 1){
            return 0
        }
        return numReverse
    }
    const numReverse =  Number(x.toString().split('').reverse().join(''))
    if(numReverse <= Math.pow(-2,31) || numReverse >= Math.pow(2,31) - 1){
        return 0
    }
    return numReverse
};

module.exports = reverse

// console.log(reverse(151612))

