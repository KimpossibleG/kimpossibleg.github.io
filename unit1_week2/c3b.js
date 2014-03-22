// This is a Solo Challenge. 
 
// There is a section below where you will write your code.
// Do not alter this object here.
 
 
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
 
2. Give adam a name property with the value "Adam".
 
3. Add a spouse property to terah and assign it the value of adam.
 
4. Change the value of the terah weight property to 125.
 
5. Remove the eyeColor property from terah.
 
6. Add a spouse property to adam and assign it the value of terah.
 
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
 
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
 
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
 
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
 
11. Add a children property to adam and assign it the value of terah children.

SET adam equal to an empty object;
SET value of adam's name property to "Adam";
SET value of terah's spouse property to adam;
SET value of terah's weight property to 125;
DELETE terah's property eyeColor;
SET value of terah's spouse's spouse to terah;
SET terah's children property to an empty Object;
SET value of terah's children's carson's name property to "Carson";
SET value of terah's children's carter's name property to "Carter";
SET value of terah's children's colton's name property to "Colton";
SET value of adam's children property to terah's children property;

*/
 
// __________________________________________
// Write your code below.
 
 
var adam = {
  name: "Adam",
};
 
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
terah.spouse.spouse = terah;
terah.children = {};
terah.children.carson = {
  name: "Carson",
};
terah.children.carter = {
  name: "Carter",
};
terah.children.colton = {
  name: "Colton",
};
adam.children = terah.children;


 
 
// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I did this exercise twice. The first time, I thought that the instructions 1-11 were
// already pseudocode. They seemed pretty clear to me, and I went straight to coding! 
// When I realized that I was actually supposed to write my own pseudocode for each step,
// I went back and read through the pseudocode standards again, and re-tried the exercise.
// 
// Writing the pseudocode was painful. In fact, I became so confused writing it that I couldn't
// get my newly-written code to pass Test 8 for quite some time, and ended up referring back
// to the first time I went through this to see what I had done. I revisted my pseudocode 
// to try and make it say what I wanted it to say, but I ended up really doubting the value
// of pseudocode.
//
// I'm feeling quite clear about the JavaScript Object Literals concept, however, and also
// feel that I have a better handle on what pseudocode is, even if I'm not a fan. :-)
 
 
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 
assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)
 
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)
 
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)
 
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)
 
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)
 
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)
 
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)
 
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)
 
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)
 
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)
 
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)
 
console.log("\nHere is your final terah object:")
console.log(terah)