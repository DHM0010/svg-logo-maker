const Shape = require("./shapes");

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

module.exports = Circle;
