function mergeSort(arr){

    // Base case
    if(arr.length <= 1){
        return arr;
    }

    // Find middle
    let mid = Math.floor(arr.length / 2);

    // Split arrays
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right){

    let result = [];

    let i = 0;
    let j = 0;

    // Compare elements
    while(i < left.length && j < right.length){

        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    // Remaining elements
    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

console.log(mergeSort([5,2,4,1]));