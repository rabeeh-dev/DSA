//Move the zero into the end 

/*function moveZero(array){
    insertPosition = 0
    for(let i=0;i<array.length;i++){
        if(array[i] !== 0){
            [array[insertPosition],array[i]] = [array[i],array[insertPosition]]
            insertPosition++
        }
    }
    return array
}
let arr = [0,1,2,0,3,0,2,5]
console.log(arr)
console.log(moveZero(arr))
*/


// // Find the third largest number 

// function thirdLargest(arr){
//     let largest = -Infinity 
//     let slargest = -Infinity 
//     let tlargest = -Infinity 

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             tlargest = slargest
//             slargest = largest 
//             largest = arr[i]
//         }else if(slargest < arr[i] && arr[i] !== largest){
//             tlargest = slargest
//             slargest = arr[i]
//         }else if(tlargest < arr[i] && arr[i]!==largest && arr[i] !== slargest){
//             tlargest = arr[i]
//         }
//     }
//     return tlargest
// }

// console.log(thirdLargest([3,2,34,5,3,21,90]))


//move zero to the front 

// function zerotoFront(arr){
//     insertPos = arr.length-1
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]!==0){
//             [arr[i],arr[insertPos]] = [arr[insertPos],arr[i]]
//             insertPos--
//         }
//     }
//     return arr
// }

// let arr = [1,23,4,4,0,4,9,0,0]
// console.log(arr)
// console.log(zerotoFront(arr))


//second largest number 

// function slargest(arr){
//     let largest = -Infinity
//     let slargest = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             slargest = largest
//             largest = arr[i]
//         }else if(arr[i]>slargest && arr[i]!==largest){
//             slargest = arr[i]
//         }
//     }
//     return slargest
// }
// console.log(slargest([1,4,34,22,33,44,]))


// //Prefix sum 

// function prefixSum(arr){
//     let sum = 0
//     let newarr = []
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//         newarr.push(sum)
//     }
//     return newarr
// }

// console.log(prefixSum([1,2,3,4,5]))

//frequenct count 

// function freqCount(arr){
//     let freq = {}
//     for(let x of arr){
//         if(!freq[x]){
//             freq[x] = 1
//         }else{
//             freq[x] += 1
//         }
//     }
//     return freq
// }

// console.log(freqCount([1,1,2,22,2,2,3,4,4,4,4,4,]))




  