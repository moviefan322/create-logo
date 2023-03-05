class Shape {
  constructor() {
    // TODO: Initialize the shape class and any potential starting properties 
    this.color = ""
  }
// TODO: Setup any needed methods for the Shape class
  setColor(color) {
    this.color = color;
  }
}


class Circle extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
    return 
  }
}

class Triangle extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
    return
  }
}

class Square extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
    return 
  }
}

// Export the Circle, Triangle, and Square classes as an object.
module.exports = { Circle, Triangle, Square };