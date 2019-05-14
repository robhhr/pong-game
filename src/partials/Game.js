import { SVG_NS, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, KEYS, RADIUS, NEW_RADIUS, MORE_RADIUS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner';
import Balls from './newBalls';
import BallsTwo from './newBalls2';

export default class Game {
  constructor(element, width, height, paused) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    const boardMid = (this.height - PADDLE_HEIGHT)/2;
    this.paddle1 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, boardMid, KEYS.p1up, KEYS.p1down);
    const paddle2Gap = this.width - BOARD_GAP - PADDLE_WIDTH;
    this.paddle2 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, paddle2Gap, boardMid, KEYS.p2up, KEYS.p2down);
    this.circle = new Ball(this.width, this.height, RADIUS);
    this.score1 = new Score(this.width/2 - 50, 30);
    this.score2 = new Score(this.width/2 + 25, 30);
    this.winner1 = new Winner(this.width/2 + 25, 80);
    this.winner2 = new Winner(this.width/2 - 225, 80);
    document.addEventListener("keydown", (event) => {
        if (event.key === KEYS.pauseKey) {
          this.paused = !this.paused;
        }
    });
    this.balls = new Balls(this.width, this.height, NEW_RADIUS);
    this.newBalls2 = new BallsTwo(this.width, this.height, MORE_RADIUS);
  }

  render() {
    if (this.paused) {
      return;
    }
    this.gameElement.innerHTML = "";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg)
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.circle.render(svg, this.paddle1, this.paddle2);
    this.score1.render(svg, this.paddle1.getScore());
    this.score2.render(svg, this.paddle2.getScore());

    if (this.paddle1.getScore() >= 15) {
      this.winner1.setMessage('Player 1 WINS!');
      this.winner1.render(svg, this.paddle1.getScore(), this.paddle2.getScore());
      this.paddle1.resetScore();
      this.paused = true;
    } else if (this.paddle2.getScore() >= 15) {
      this.winner2.setMessage('Player 2 WINS!');
      this.winner2.render(svg, this.paddle1.getScore(), this.paddle2.getScore());
      this.paddle2.resetScore();
      this.paused = true;
  }

    if (this.paddle1.getScore() >= 3) {
      this.balls.render(svg, this.paddle1, this.paddle2);
      } else if (this.paddle2.getScore() >= 3) {
        this.balls.render(svg, this.paddle1, this.paddle2);
      }
      
    if (this.paddle1.getScore() >= 6) {
      this.newBalls2.render(svg, this.paddle1, this.paddle2);
      } else if (this.paddle2.getScore() >= 6) {
      this.newBalls2.render(svg, this.paddle1, this.paddle2);
      }

  }
}