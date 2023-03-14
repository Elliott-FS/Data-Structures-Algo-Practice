// A linear search is a search that looks through
// the list or data structure it is searching 
// through one element at a time from start to
// finish. 

// JavaScript has many built in Linear Search
// algorithms indexOf, find, includes, find index. 

//Solution attempt

function linearSearch( arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return arr.indexOf(i)
        };
        if(arr[(arr.length - 1)] != val){
            return -1
        }
    }
}