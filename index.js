const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for your logo:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword OR hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for your logo:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter your shape color (keyword OR hexadecimal number):",
  },
];

console.log("Welcome to the SVG Logo Maker!");

inquirer
  .prompt(questions)
  .then((userInput) => {
    const svgContent = generateSVG(userInput);
    saveSVGToFile(svgContent);

    console.log("Generated logo.svg");
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

function generateSVG(userInput) {
  let shape;
  switch (userInput.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      throw new Error("Invalid shape selected");
  }

  shape.setColor(userInput.shapeColor);

  const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
    userInput.textColor
  }" font-size="32">${userInput.text}</text>
</svg>
`;

  return svg;
}

function saveSVGToFile(svgContent) {
  fs.writeFileSync("logo.svg", svgContent);
}
