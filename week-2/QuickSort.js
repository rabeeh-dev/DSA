function quickSort(arr){

    // Base case
    if(arr.length <= 1){
        return arr;
    }

    // Choose pivot
    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    // Partition
    for(let i = 0; i < arr.length - 1; i++){

        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    // Recursion
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([7,2,9,1,5]));