// How to write a recursive function: invoke the same function with a different
// input until you reach your base case.

// 


// Basic recursive function
function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return; //this line i important because it makes the code stop after base case.
    }
    console.log(num);
    num--;
    countDown(num)
}






