class Character {
    // constructor
    constructor(
        public health: number,
        public name: string,
        public strength: number
    ) {} // we initialise with "Public" if the front end user is going to be used to create objects either through a form or another way

    validate(): boolean {
        // functions - we dont need to use the keyword "function here"
        return !!this.health && !!this.name && !!this.strength;
        // !! converts to boolean
        // "this" refers to this instance of
        // function checks to see if the values are there
    }
}

let human = new Character(50, "john", 5);

// modifers : There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

// readonly in classes : Similar to arrays, the readonly keyword can prevent class members from being changed.
class Person2 {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("Jane");
console.log(person.getName());

// class inheritance with "implements" : Interfaces can be used to define the type a class must follow through the implements keyword.

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {}

    public getArea(): number {
        return this.width * this.height;
    }
}

// class inheritance with "extends" : Classes can extend each other through the extends keyword. A class can only extend from one other class.

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // getArea gets inherited from Rectangle
}

// Override : When a class extends another class, it can replace the members of the parent class with the same name.
interface Shape {
    getArea: () => number;
}

class Rectangle2 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {}

    public getArea(): number {
        return this.width * this.height;
    }
    // Original method
    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square2 extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

// Abstract - classes : Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle3 extends Polygon {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}
