class Shape {
  constructor() {
    // TODO: Initialize the shape class and any potential starting properties
    this.color = "";
    this.shapeElement = "";
  }
  // TODO: Setup any needed methods for the Shape class
  setColor(color) {
    this.color = color;
    this.fillColor = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill= "${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    // TODO: Write a return value for the "render" method``
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill= "${this.color}" />`;
    // TODO: Write a return value for the "render" method
  }
}

// Export the Circle, Triangle, and Square classes as an object.
module.exports = { Circle, Triangle, Square };
