
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

mean([])
