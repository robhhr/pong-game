import { SVG_NS, SPEED } from '../settings';

export default class Paddle {
  constructor(boardHeight, paddleWidth, paddleHeight, initialX, initialY, keyUp, keyDown) {
      this.boardHeight = boardHeight;
      this.paddleWidth = paddleWidth;
      this.paddleHeight = paddleHeight;
      this.x = initialX;
      this.y = initialY;
      this.score = 0;
      this.speed = SPEED;
      document.addEventListener("keydown", event => {
        switch(event.key) {
            case keyUp:
                this.moveUp();
                break;
            case keyDown:
                this.moveDown();
                break;
        }
      });
  }

  moveUp() {
      this.y = Math.max(0, this.y - this.speed);
  }

  moveDown() {
      this.y = Math.min(this.boardHeight - this.paddleHeight, this.y + this.speed);
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.paddleWidth);
    rect.setAttributeNS(null, "height", this.paddleHeight);
    rect.setAttributeNS(null, "fill", "white");
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);    
    svg.appendChild(rect);

  }
}