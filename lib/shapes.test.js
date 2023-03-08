// Import the necessary classes to test
const { Square, Triangle, Circle } = require("./shapes");

// Describe the test cases for the Circle class
describe("Circle", () => {
  // Test case 1
  test("should render svg for a green circle element", () => {
    // Set Up
    const color = "green";
    const circle = new Circle();
    circle.setColor(color);
    circle.render();
    expect(circle.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill= "${color}" />`
    );
    // Execute

    // Verify
  });
  // Test case 2
  test("should accept a fillColor param", () => {
    // Set Up
    const color = "green";
    const circle = new Circle();
    circle.setColor(color);
    expect(circle.fillColor).toEqual(color);
    // Execute
    // Verify
  });
});

// Describe the test cases for the Triangle class
describe("Triangle", () => {
  // Test case 1
  test("should render svg for a green polygon element", () => {
    // Set Up
    const color = "green";
    const triangle = new Triangle();
    triangle.setColor(color);
    triangle.render();
    expect(triangle.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    );
    // Execute
    // Verify
  });
  // Test case 2
  test("should accept a fillColor param", () => {
    // Set Up
    // Execute
    const color = "green";
    const triangle = new Triangle();
    triangle.setColor(color);
    expect(triangle.fillColor).toEqual(color);
    // Verify
  });
});

// Describe the test cases for the Square class
describe("Square", () => {
  // Test case 1
  test("should render svg for a green polygon element", () => {
    // Set up
    const color = "green";
    const square = new Square();
    square.setColor(color);
    square.render();
    expect(square.render()).toEqual(
      `<rect x="90" y="40" width="120" height="120" fill= "${color}" />`
    );
    // Execute
    // Verify
  });

  // Test case 2
  test("should accept a fillColor param", () => {
    // Set up
    // Execute
    const color = "green";
    const square = new Square();
    square.setColor(color);
    expect(square.fillColor).toEqual(color);
    // Verify
  });
});
