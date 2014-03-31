var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





var julia = {
	name: "Julia Roberts", 
	age: 42, 
	quote: "I sure am a pretty woman!"
}

var adam = {
	name: "Adam Sandler",
	age: 47,
	quote: "That's your home! Are you too good for your home?!"
}

var kristen = {
	name: "Kristen Bell",
	age: 33,
	quote: "Do you wanna build a snowman?"
}

var jim = {
	name: "Jim Carrey",
	age: 52,
	quote: "...So you're telling me there's a chance? YEAH!"
}

var actors = [julia, adam, kristen, jim]

function Client(name, age, quote) {
	this.name=name;
	this.age=age;
	this.quote=quote;
}

console.log(shooterMcGavin);
console.log(kristen);
console.log(actors);

var i = 0;

while (i < actors.length) {
	console.log(this.name + " is " + this.age + " years old and is best known for the quote, \"" + this.quote + "\"!");
	i = i + 1;
}



