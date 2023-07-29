// circle test
const Circle = require("../lib/circle");

describe("Circle Class", () => {
  it("should render a blue circle ", () => {
    const circle = new Circle();
    circle.setColor("blue");

    const expectedSVG = '<circle cx="150" cy="115" r="80" fill="blue" />';
    const actualSVG = circle.render();

    expect(actualSVG).toEqual(expectedSVG);
  });
});
// trianfle test
const Triangle = require("../lib/triangle");

describe("Triangle Class", () => {
  it("should render a red triangle", () => {
    const triangle = new Triangle();
    triangle.setColor("red");

    const expectedSVG =
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
    const actualSVG = triangle.render();

    expect(actualSVG).toEqual(expectedSVG);
  });
});
// square test
const Square = require("../lib/square");

describe("Square Class", () => {
  it("should render a green square", () => {
    const square = new Square();
    square.setColor("green");

    const expectedSVG =
      '<rect x="56" y="56" width="188" height="188" fill="green" />';
    const actualSVG = square.render();

    expect(actualSVG).toEqual(expectedSVG);
  });
});
