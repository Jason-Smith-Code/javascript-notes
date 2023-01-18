// Defining an interface - a way of controlling how an object should be built by defining its attributes and applying the product interface as a type when creating the new object.

interface ProductInterface {
    id: number,
    name: string,
    icon: string,
    description?: string
}

// Using an interface
// when creating objects using the interface we will get an error if we have not used the correct attributes
let product: ProductInterface = {
    id: 12,
    name: "Jason",
    icon: "image.jpg",
}


function productDetails(product: {id: number, name: string}) {
    console.log(`${product.id} + ${product.name}`)
}

// extending an interface

interface twoDimensional {
    height: number,
    width: number
  }
  
interface threeDimensional extends twoDimensional {
    depth: number
}

const threeDimensionalShape: threeDimensional = {
    height: 20,
    width: 10,
    depth: 5
};

// Implements - keyword to implement an interface into a class




