const publisher = function (params) {
    console.log(params)
}

class Car {
    constructor (name, model){
        this.name = name;
        this.model = model;
    }
    // @publisher
    factory() {
        return `The is located in mumbai and manufacture ${this.model} by ${this.name} ` 
    }
}


const car = new Car('Toyota', 'Corolla');
console.log(car.factory()); // The is located in mumbai and manufacture Corolla by Toyota



//==========================
/*
function printName(...name) {
    console.log(`hello ${name}`);
}

function loggingWrapped(wrappedFn) {
    return function (){
        console.log('initializing');
        const result = wrappedFn.apply(this, arguments)
        console.log('finished');
        return result
    }
}

const wrapped = loggingWrapped(printName)

// printName('Vistor')
wrapped('Thomas', 'Rajesh')
*/