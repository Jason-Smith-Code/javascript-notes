// enumeration (enum) - a set of named constants like an object with no values

// creating an enum
enum ProductType {
    Tomatos, // default value 0
    Cucumber, // 1
    Chocolate, // 2
}

// giving enum number values
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

// giving enum string values
enum CardinalDirections {
    North = "North",
    East = "East",
    South = "South",
    West = "West",
}

// accessing an enum value
let foodType = ProductType.Chocolate;
