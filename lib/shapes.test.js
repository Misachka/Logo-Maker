// Importing logo shapes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a green background to render
describe("Triangle test", () => {
  test("test for a triangle with a green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

// Unit testing -> testing for a square with a black background to render
describe("Square test", () => {
  test("test for a square with a black background", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="black" />'
    );
  });
});

// Unit testing -> testing for a circle with a purple background to render
describe("Circle test", () => {
  test("test for a circle with a purple background", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="purple" />'
    );
  });
});