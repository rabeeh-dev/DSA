// function moveZeroToEnd(arr){
//     let j=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             j++
//         }
//     }

//     console.log(arr)
// }

// moveZeroToEnd([0,1,0,3,12])

// function thirdLargest(arr){
//     let largest = -Infinity
//     let slargest = -Infinity
//     let tlargest = -Infinity

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             tlargest = slargest
//             slargest = largest
//             largest = arr[i]
//         }else if(arr[i]>slargest && arr[i]!==largest){
//             tlargest = slargest
//             slargest = arr[i]
//         }else if(arr[i]>tlargest && arr[i]!==slargest && arr[i]!==largest){
//             tlargest = arr[i]
//         }
//     }

//     console.log(tlargest)
// }

// thirdLargest([0,1,2,0,3,12])
