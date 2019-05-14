import { SVG_NS } from '../settings';
import audioFile from "../../public/sounds/pong-03.wav";

export default class Balls {
    constructor(boardWidth, boardHeight, radius) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.radius = radius;
        this.direction = 1;
        this.ping = new Audio(audioFile);
        this.reset();
    }
    reset() {
        this.x = this.boardWidth/2;
        this.y = this.boardHeight/2;
        this.vy = 0;
        this.vx = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy))/2.5;
        this.vy = this.vy/2.5;
    }
    wallCollision() {
        const hitsTop = this.y - this.radius <= 0;
        const hitsBottom  = this.y + this.radius >= this.boardHeight;
        if (hitsTop || hitsBottom) {
            this.vy = this.vy * -1;
        }
    }
    goalCollision(player1, player2) {
        if (this.x <= 0) {
            player2.increaseScore();
            this.direction = this.direction * -1;
            this.reset();
        } else if (this.x >= this.boardWidth) {
            player1.increaseScore();
            this.direction = this.direction * -1;
            this.reset();
        }
    }
    paddleCollision(player1, player2) {
        if (this.vx > 0) {
            const p2 = player2.getCoordinates();
            // check for hit with player2
            if (this.x + this.radius >= p2.left &&
                this.y + this.radius <= p2.right &&
                this.y >= p2.top &&
                this.y <= p2.bottom) {
                    this.vx = this.vx * -1;
                    this.ping.play().catch(e => null);
                }
        } else {
            const p1 = player1.getCoordinates();
            if (this.x - this.radius <= p1.right &&
                this.x - this.radius >= p1.left &&
                this.y >= p1.top &&
                this.y <= p1.bottom) {
                    this.vx = this.vx * -1;
                    this.ping.play().catch(e => null);
                }
        }
    }
    render(svg, player1, player2) {
        let balls = document.createElementNS(SVG_NS, "circle");
        balls.setAttributeNS(null, "fill", "yellow");
        balls.setAttributeNS(null, "cx", this.x);
        balls.setAttributeNS(null, "cy", this.y)
        balls.setAttributeNS(null, "r", this.radius);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.wallCollision();
        this.goalCollision(player1,player2);
        this.paddleCollision(player1, player2);
        svg.appendChild(balls);
    }
}