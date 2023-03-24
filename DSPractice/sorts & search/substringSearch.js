// String search: count the number of times a smaller string 
// apperas in a longer string.

// Naive approach: check pairs of characters individually. 

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i ++){
        for(var j = 0; j < short.length; j ++){
            if(short[j] != long[i + j]){
                break;
            }
            if(j === short.length - 1){
                count ++
            }
        }
    }
    return count;
}

naiveSearch("lorie lol'd", "lol")

// Works maybe refactor for noi match edge case. 
// For next step see sortingAlgorithms.js 