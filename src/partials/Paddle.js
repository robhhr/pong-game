import { SVG_NS, SPEED } from '../settings';

export default class Paddle {
  constructor(boardHeight, paddleWidth, paddleHeight, initialX, initialY, keyUp, keyDown) {
      this.boardHeight = boardHeight;
      this.paddleWidth = paddleWidth;
      this.paddleHeight = paddleHeight;
      this.initialX = initialX;
      this.initialY = initialY;
      this.score = 0;
      this.speed = SPEED;
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.paddleWidth);
    rect.setAttributeNS(null, "height", this.paddleHeight);
    rect.setAttributeNS(null, "fill", "white");
    rect.setAttributeNS(null, "x", this.initialX);
    rect.setAttributeNS(null, "y", this.initialY);    
    svg.appendChild(rect);

  }
}

/* <rect x="5" y="100" width="8" height="56" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
<rect x="498" y="100" width="8" height="56" fill="#FFFFFF" stroke="#000000" stroke-width="2" /> */