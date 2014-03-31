 
//  **Find the Sum**
 
//create a function that accepts variables into an array
//within the function do the following:
//while all variables are integers (assume all variables will be integers)
//add all inputs togther
//Display the Result
 
// Notes for Catherine:
// I removed our error message -- even though I thought it was FABULOUS and I learned so much
// building it with you! :-)
// 

var sum = function(array) {
    var i = 0;
	var sum = 0;
    while (i < array.length) {
	        sum = sum + array[i];
	        i += 1;
	}
    console.log(sum);
}

// Un-comment the below to test:
// sum([1,2,3])

//  **Find the Mean**
 
//create a function that accepts variables into an array
//within the function do the following:
//while all variables are integers (assume all variables will be integers)
//add all of the inputs together
//create a variable that contains the result of the sum 
//divide the result variable by the the total number of inputs
//Display the Result

// Notes for Catherine:
// Because the pseudocode stuck with 'display', I didn't call sum() from within mean().

var mean = function(array){
    var i = 0;
	var sum = 0;
    while (i < array.length) {
	        sum = sum + array[i];
	        i += 1;
	}

    console.log( sum / array.length );
}

// Un-comment the below to test:
// mean([1,2,3])

//  **Find the Median**
 
//create a function that accepts variables into an array
//within the function do the following:
//while all variables are integers (assume all variables will be integers)
//create a variable that stores all of the inputs from smallest to largest (sorted)
//create a variable that contains the integer equal to the total number of inputs (length)
//the formula for finding a median based on the variables in the function is indented below
      
	//median === ((sorted[Math.floor((length - 1) / 2))]) + (sorted[Math.floor(length / 2)]) / 2
 
//add the forumal or to the code or create your own that equates the same result
//Display the Result

// Notes for Catherine:
// Learned something super cool while doing this! The sort() function in JavaScript
// sort numbers "alphabetically" -- meaning it sorts based on the first digit, not the value of number.
// Because of that, 40 would come before 5.
// To get around it, we need to include a function within the sort function, per below!
// Also, you'll see that I wrote to Tyler to ask him to include a note about using Math.floor,
// and he responded quickly so I updated it above. Thanks for the reminder on the Math.floor method
// earlier today -- I would have been totally lost without it!

var median = function(array) {
	var sorted = array.sort(function(a,b){return a-b});
	var num_inputs = sorted.length;
	median = (sorted[Math.floor((num_inputs - 1)/2)] + sorted[Math.floor(num_inputs / 2)]) / 2;
	console.log(median);
}

// Un-comment the below to test:
// median([1,2,5,10])
