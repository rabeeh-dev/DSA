function freqCounter(str){
    let freq = {}
    for(let x of str){
        if(!freq[x]){
            freq[x] = 1
        }else{
            freq[x] += 1
        }
    }
    return freq
}
console.log(freqCounter("rabeeh"))



function DupFind(arr){

    let seen = {};

    let duplicates = [];

    for(let x of arr){

        if(seen[x]){

            duplicates.push(x);

        }else{

            seen[x] = true;
        }
    }

    return duplicates;
}

console.log(DupFind([1,1,2,2,3,4]));