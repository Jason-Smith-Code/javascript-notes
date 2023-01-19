// Partial : changes all the properties in an object to be optional.

// Required : changes all the properties in an object to be required.

// Record : is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
    Alice: 21,
    Bob: 25,
};

// Omit<ObjectName, 'keyName1' | 'keyName2'> : removes keys from an object type.
interface ObjectNamePerson {
    nameFirst: string;
    age: number;
    location?: string;
}

const jimmy: Omit<ObjectNamePerson, "age" | "location"> = {
    nameFirst: "jimmy",
    // `Omit` has removed age and location from the type and they can't be defined here
};

// Pick<ObjectName, "keyName"> : removes all but the specified keys from an object type.
const bob: Pick<ObjectNamePerson, "nameFirst"> = {
    nameFirst: "Bob",
    // `Pick` has only kept nameFirst, so age and location were removed from the type and they can't be defined here
};

// Exclude<nameOfType, valueOfType> : removes types from a union.
type Primitive = string | number | boolean; // union stored in "Primative"
const excluding: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// ReturnType<nameOfType> : extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };

const returnedType: ReturnType<PointGenerator> = {
    x: 10,
    y: 20,
};

console.log(returnedType); // { x: 10, y: 20 }

// Parameters<nameOfType> : extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number }) => void;

const point: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20,
};

console.log(point);
