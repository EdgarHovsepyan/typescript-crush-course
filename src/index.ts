// Basic Types
let id: number = 5;
let company: string = "Hello World";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"]

// Tuple 
let person: [number, string, boolean] = [1, "Hi", true ]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, "Hi"],
    [2, "Hello"],
    [3, "World"],
]

// Unions
let pId: string | number = 22

pId = "22";

// Enum
enum Direction1 {
    Up = 1,
    Down, // 2
    Left, // 3
    Right // 4
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left", 
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Jhon"
}

// Type Assertion 
let cId: any = 1
// let customerId = <number>cId
let customerId = cId as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
} 

// log("STRING")

// Interfaces 
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1 : UserInterface = {
    id: 1,
    name: "Jhon"
}

// user1.id = 5

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes 
interface PersonInterface {
    id: number
    name: string
    age: number
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string
    age: number

    constructor(id: number, name: string, age: number) {
        this.id = id,
        this.name = name
        this.age = age
    }

    register() {
        return `${this.name} is now registred`
    }
}

const jhon = new Person(1, "Jhon", 36)
const jordan = new Person(2, "Jordan", 63)

// SubClasses
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age)
        this.position = position
    }
}

const emp = new Employee(3, "Shawn", 27, "Developer")

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Brad", "Jhon", "Jill"])
