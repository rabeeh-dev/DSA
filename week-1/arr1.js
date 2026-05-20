// let arr = [0,1,3,4,2,0,3,0,34]
// let j = 0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//         j++
//     }
// }

// console.log(arr)



// let arr = [0,1,3,4,2,0,3,0,44,22,34]
// let largest = -Infinity
// let slargest = -Infinity
// let tlargest = -Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         tlargest = slargest 
//         slargest = largest 
//         largest = arr[i]
//     }else if(arr[i]>slargest && arr[i]!= largest){
//         tlargest = slargest 
//         slargest = arr[i]
//     }else if(arr[i]>tlargest && arr[i]!=slargest && arr[i]!=largest){
//         tlargest = arr[i]
//     }
// }

// console.log(tlargest)

// function binarysearch(arr,n){
//     let left = 0
//     let right = arr.length-1
    
    
//    while(left <= right){

//         let mid = Math.floor((left+right)/2)
        
//         if(arr[mid]===n){
//                 return mid
//             }else if(n>arr[mid]){
//                 left = mid + 1
//             }else{
//                 right = mid - 1
//         }
//     }
// }

// console.log(binarysearch([1,2,3,4,5,6,7],1))


// function linearSearch(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===n){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([1,2,4,76,4],76))

// let name = "malayalam".split("")
// // let rname = name.split("").reverse().join("")
// // console.log(rname)

// let isPalindrome = true 
// for(let i=0;i<name.length;i++){
//     if(name[i]!==name[name.length-i-1]){
//         isPalindrome = false
//     }
// }
// console.log(isPalindrome)

