// typescript functions

function functionName(a: number, b: number) {
    const result: number = a + b;
    return result;
}

// typescript parameters
function parameterFunction(parameter1: number, parameter2: string) {}

// Optional parameters : add a ? right after the key
type ExampleTypes = {
    id: number;
    name: string;
    icon?: string; // ? means optional
};

function optionalParameters(id: number, name: string, icon?: string) {
    // when using this function, its now optional to fill in the icon parameter.
}

// Default parameters : this are like optional parameters, but you give it a default value, which can be changed
function defaultParameters(
    id: number,
    name: string,
    icon: string = "default-image.jpg"
) {
    // now if icon parameter is not used in the function, it uses the default value instead
}

// Rest parameters : For when you dont know how many parameters you need in a function. this function allows as many parameters in string format as you want
function buildAddress(
    street: string,
    city: string,
    ...restOfAddress: string[]
) {
    const address = `${street}, ${city}, ${restOfAddress.join(", ")}`;
    return address;
}

// Named parameters

// Parameter desctructuring
