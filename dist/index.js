"use strict";
// Basic Types
let id = 5;
let company = "Hello World";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple 
let person = [1, "Hi", true];
// Tuple Array
let employee;
employee = [
    [1, "Hi"],
    [2, "Hello"],
    [3, "World"],
];
// Unions
let pId = 22;
pId = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; // 4
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Jhon"
};
// Type Assertion 
let cId = 1;
// let customerId = <number>cId
let customerId = cId;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Jhon"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name, age) {
        this.id = id,
            this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registred`;
    }
}
const jhon = new Person(1, "Jhon", 36);
const jordan = new Person(2, "Jordan", 63);
// SubClasses
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", 27, "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "Jhon", "Jill"]);
