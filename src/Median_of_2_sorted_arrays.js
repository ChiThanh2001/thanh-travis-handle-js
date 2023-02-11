var findMedianSortedArrays = function(nums1, nums2) {
    const newNum = nums1.concat(nums2)
    for(let i = 0 ; i < newNum.length-1 ; i++){
        for(let j = i+1 ; j < newNum.length ; j++){
            let temp = 0 
            if(newNum[i] > newNum[j]){
                temp = newNum[i]
                newNum[i] = newNum[j]
                newNum[j] = temp
            }
        }
    }
    console.log(newNum)
   if(newNum.length % 2 === 0){
       const i = newNum.length / 2 
       return (newNum[i-1] + newNum[i]) /2
   }
   const i = Math.floor(newNum.length / 2)
   return newNum[i]
};

module.exports = findMedianSortedArrays

// console.log(findMedianSortedArrays([1,3],[2]))