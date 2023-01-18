class Character {
    // constructor 
    constructor(public health: number, public name: string, public strength: number ) {} // we initialise with "Public" if the front end user is going to be used to create objects either through a form or another way

    validate(): boolean {     // functions - we dont need to use the keyword "function here"
        return !!this.health && !!this.name && !!this.strength
        // !! converts to boolean
        // "this" refers to this instance of
        // function checks to see if the values are there
    }
}

let human = new Character(50,"john",5)