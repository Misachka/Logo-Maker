// Importing logo shapes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a green background to render
describe("Triangle test", () => {
  test("test for a triangle with a green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="160, 19 248, 183 57, 183" fill="green" />'
    );
  });
});

// Unit testing -> testing for a square with a black background to render
describe("Square test", () => {
  test("test for a square with a black background", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<rect x="75" y="38" width="155" height="155" fill="black" />'
    );
  });
});

// Unit testing -> testing for a circle with a purple background to render
describe("Circle test", () => {
  test("test for a circle with a purple background", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<circle cx="160" cy="110" r="85" fill="purple" />'
    );
  });
});