// Define the `SVG` class
class SVG {
  // Define the constructor function that sets initial properties
  constructor() {
  // TODO: Set initial values for the properties of the SVG class
    this.textElement = "";
    this.shapeElement = "";
  }
 
   
  // Define a function that renders an SVG image
  render() {
    //TODO: Return an SVG image string that takes in properties from the SVG class
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  }
     
  // Define a function that sets text to display in the SVG image
  setText(text, textColor) {
    // TODO: Check if the message length is greater than 3, if so, throw an error
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.")
    }
    // TODO: Set the text property with the message, font size, and color
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
  }
      
  // Define a function that sets the shape to display in the SVG image
  setShape(shape) {
    // TODO: Set the shape property with the shapes SVG code
    this.shapeElement = shape.render();
  }
      
}
  
  // Export the `SVG` class
  module.exports = SVG;
