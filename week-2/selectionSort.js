
let arr = [3,2,1,32,0,24]

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectionSort(arr))

function selectionSort1(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] > arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}


console.log(selectionSort1(arr))