// ** Difference between LET and CONST ** //

// the equal sign assigns the let variable
// let variable allows the value to be changed
let x = 5;
console.log(x);
x = 15;
console.log(x);

// const does not allow you to change the value. Once it is set, it does not change
// can mutate the property by accessing it through a . notation
const z = 10;
console.log(z);

const luckyNumbers = [1, 3, 4, 5];
console.log(luckyNumbers);
// can mutate the array by doing this -->
luckyNumbers.push(6); // this adds a number at the end of the array.
console.log(luckyNumbers);

// ** Array Functions ** //

// Anonymous function
const bark = function () {
  console.log("woof woof");
};
bark();

// Array function
const bark2 = () => {
  console.log("woof woof");
};
bark2();

// Can pass through something
const bark3 = function (name) {
  console.log(name + " goes woof woof");
};
bark3("Spot");

// Doesn't have ()
const bark4 = (name) => {
  console.log(name + " goes woof woof");
};
bark4("spot");

const person = {
  name: "John",
  talk: function () {
    console.log(this.name);
  },
};
person.talk();

// Does not have dis-context. Does not have a property, so returns an empty string
const person2 = {
  name: "John",
  talk: () => {
    console.log(this.name);
  },
};
person2.talk();

// ** Template Literals ** /

// old way
const name = "Akaljot";
const color = "blue";
console.log(name + "'s favorite color is " + color);

// new way -- using the back ticks ``
console.log(`${name}'s favorite color is ${color}`);

// ** Object Destructuring ** //

const animal = {
  species: "Bear",
  age: 15,
  color: "Brown",
  height: 7.0,
  move: () => {
    console.log("move");
  },
};
// one way
console.log(animal.species);

// another way
const { species, age, weight } = animal;
console.log(species, age, weight);

// ** Array Destructuring ** //

// yo and foo corresponds with the order of the array
const colors = ["red", "green", "blue"];
const [yo, foo] = colors;
console.log(yo, foo);

// ** Default Function Parameters ** //

function greet(name) {
  console.log(`hello there ${name}`);
}
greet("Akaljot");

// to show undefined -- have a default
function greet(name = "visitor") {
  console.log(`hello there ${name}`);
}
greet("Joey");
greet();

// const person1 = {
//   name: "Daniel",
//   age: 21,
//   homeTown: "fresno",
// };

// function greet({ name }) {
//   console.log(name);
// }
// greet(person1); // passing an object as argument

let colors1 = ["r", "g", "b"];
let copyColors1 = colors1;
console.log(copyColors1);

// new way of copying
let copyColors2 = [...colors1];
colors1.push("y");
console.log(copyColors2);

// ** CLASSES ** //

// Old Way
// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.move = function () {
//   console.log(this.species + " is moving");
// };

// const bear = new Animal("polar bear");

// bear.move();

// New way -- using a class
class Animal {
  constructor(species) {
    this.species = species;
  }
  move() {
    console.log(this.species + " is moving");
  }
}

const bear = new Animal("polar bear");

bear.move();

class Human extends Animal {
  talk() {
    console.log(this.species + " is talking");
  }
}

const human = new Human("John");
human.move();
human.talk();


