#! /usr/bin/env node
//Task # 35
// Animal Think atleast 3 different animals that have a common characteristic save the name of these animals in a list, 
// and then use a for loop to print out the name of each animal. 
// Modify your program to print a statement about each animal, such as a dog would make a great pet.
// Add a line at the end of your program starting what these animals have in common, you could print.
// A sentence such as any of these animals would make a great pet.
let animals = ["Cat", "Lion", "Dog"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} has a tail`);
}
console.log("\n All of these are great pets ! but i love cats more");
export {};
