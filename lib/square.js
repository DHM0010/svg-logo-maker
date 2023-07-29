const Shape = require("./shapes");

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="56" y="56" width="188" height="188" fill="${this.color}" />`;
  }
}

module.exports = Square;
