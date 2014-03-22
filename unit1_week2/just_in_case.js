

//  **Find the Sum**
 
//while all variables are integers
//add all inputs togther
//Display Result
 
// Notes:
// Unclear what the input should be. Should it be an array? 
// Should the function throw an error if input is anything other than integers?
// Should the function display the result or is that a separate step (i.e. 1. write function, 2. display result of function)?  We are assuming the latter.

var sum = function(array) {
    var i = 0;
	var sum = 0;
    while (i < array.length) {
    	if (array[i] === Math.floor(array[i])) {
	        sum = sum + array[i];
	        i += 1;
	    }
	    else {
	    	sum = "This input includes something other than an integer!";
	    	i = array.length;
	    }
    }
    return (sum);
}
 
//  **Find the Mean**
 
//while all variables are integers
//add all of the inputs together
//create a variable that contains the result
//divide the result variable by the the total number of inputs
//Display Result

var mean = function(array){
//	var sum = function(array) {
    var i = 0;
	var sum = 0;
    while (i < array.length) {
    	if (array[i] === Math.floor(array[i])) {
	        sum = sum + array[i];
	        i += 1;
	    }
	    else {
	    	sum = "This input includes something other than an integer!";
	    	i = array.length;
	    }
    }

    if (sum === Math.floor(sum)) {
    	console.log( sum / array.length );
    }
    else {console.log(sum)};
}


//  **Find the Median**
 
//while all variables are integers
//create a variable that stores all of the inputs from smallest to largest (sorted)
//create a variable that contains the integer equal to the total number of inputs (length)
 
 
      //subtract 1 from the length variable and divide that by 2
      //then add the above to (length divided by 2)
      //divide the above result by 2
 
//Display Result

