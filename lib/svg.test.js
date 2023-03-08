// Import the necessary classes to test
const SVG = require("./svg");
const { Square } = require("./shapes");

// Test case 1
test("should render a 300 x 200 svg element", () => {
  // Set Up
  const svg = new SVG();
  expect(svg.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
  );
  // Execute

  // Verify
});
// Test case 2
test("should append text element", () => {
  // Set Up
  const svg = new SVG();
  const textColor = "green";
  const text = "tst";
  const textElement = "";
  svg.setText(text, textColor);
  // Execute
  expect(svg.textElement).toMatch(
    `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`
  );
  // Verify
});
// Test case 3
test("should set text message and color", () => {
  // Set Up
  const svg = new SVG();
  const textColor = "green";
  const text = "tst";
  const textElement = "";
  svg.setText(text, textColor);
  // Execute
  expect(svg.textElement).toMatch(
    `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`
  );
  // Execute
  // Verify
});
// Test case 4
test("should throw if text exceeds 3 characters", () => {
  // Set Up
  const svg = new SVG();
  // const text = "tes";
  // const textColor = "blue";
  // let error = new Error("Text must not exceed 3 characters.");

  // Execute
  expect(() => svg.setText("testing", "blue")).toThrow(Error);
  // Execute
  // Verify
});
// Test case 5
test("should include a shape", () => {
  const svg = new SVG();

  expect(svg).toHaveProperty("shapeElement");
  // Execute
  // Verify
});
