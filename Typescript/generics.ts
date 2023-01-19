// Generics : allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.

function identity<Type>(arg: Type): Type {
    // type refers to what ever type we want to use
    return arg;
}

// Generics using Functions : help make more generalized methods which more accurately represent the types used and returned.
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

// Generics using Classes : Generics can be used to create generalized classes, like Map.
class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue<number>("myNumber");
value.setValue(10);
console.log(value.toString()); // myNumber: 10
