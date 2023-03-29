// Like bubbleSort but it places smaller values into position. 

// Selection sort Pseudo:
// 1. First make a variable for the first value in data set as the min or smallest 
// value you have seen so far. 
// 2. Go through the array and copmare it until you find something smaller.
// 3. If you find something smaller update your minimum value to be the value at the smaller numbers index.
// 4. If the minimum is not the value(index) you started
// with swap the two values.
// 5. Repeat with next element until array is sorted.

function selectionSort(arr){
    for( var i= 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if( arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

selectionSort([34,22,10, 19,17]);