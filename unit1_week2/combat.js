// I worked on this challenge [by myself, with:]

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue Mission

//move up
//move right x2
//move down 1
//attack

this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom

//insert:
//move right
//move left

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

// Drink Me

// attack
// move down
// move up
// attack

// Note: had to adjust to move further right before down, then move further right before attacking

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Taunt the Guards

// delete the comments
// see what happens
// go from there

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Run!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap

//move down
//say something
//move back up
//Edited to move down further and move up further. Need to estimate distance better!

this.moveDown();
this.moveDown();
this.say("Hey Goober!");
this.moveUp():
this.moveUp();

// Taunt
// say something three times

this.say("Dirtbag!");
this.say("Munchkin!");
this.say("Monkey!");

// Break the prison
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
    
// for each friend, return true for name
if(name === "Lucas")
return true;

if(name === "Marcus")
    return true;
    
if(name === "Gordon")
    return true;
    

// Cowardly Taunt

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you

// Say something!

// Then run back behind the arrow towers for safety

// move to the middle of the towers where the ogres can hear
// yell something rude
// run back to 70, 10
// went too close. Move to somewhere closer.

this.moveXY(54, 32);
this.say("You suck ogres!");
this.moveXY(70, 10);

// Commanding Followers

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!

// say something with follow in it
// say something with attack in it
// apparently, I am not close enough to the ogres.
// Thorin will move closer before saying attack

this.say("Follow me, everyone!");
this.moveXY(64, 43);
this.say("Attack the ogres, team!");

// Mobile Artillery

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.

// find each ogres' coordintes
// attack each one with coordinates
// attack biggers ogres x2
// revised move closer to other ogres before firing
// no need to target every single ogre; just get the area

this.moveXY(45, 41);
this.attackXY(52, 66);
this.attackXY(46, 53);
this.attackXY(68, 53);
this.attackXY(59, 47);


// Reflection:
// Write your reflection here.

// Questions
// What is 'this' referring to?
// 'This' refers to the object currently selected.
// What does the () do?
// The () contains the arguments/parameters.
// What is the point of the semicolons?
// The semilcolons indicate that a command is complete.

// I learned that JaveScript commands are pretty straightforward, and that pseudo-code is
// good directionally, but often needs adjustment. Also learned that the syntax errors
// may not prevent the code from executing properly in all cases, but will still
// throw errors.