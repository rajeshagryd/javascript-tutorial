const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.map( (item) => item*10).filter((item) => item >=50)
console.log(newArr);

// Define the interface
var Shape = {
    draw: function() {
      throw new Error("Method 'draw' must be implemented.");
    }
};
  
// Implement a class that adheres to the Shape interface
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    draw() {
      console.log("Drawing a circle with radius", this.radius);
      // Actual drawing logic here
    }
}
  
// Implement another class that adheres to the Shape interface
class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    draw() {
      console.log("Drawing a square with side length", this.sideLength);
      // Actual drawing logic here
    }
}
  
// Usage
function drawShape(shape) {
    shape.draw();
}
  
const circle = new Circle(5);
const square = new Square(10);

// drawShape(circle);
// drawShape(square);


const obj = new WeakSet();
obj.add({"name":"John","age":30,"city":"New York"}).add({"name":"Jane","age":25});
console.log(obj);