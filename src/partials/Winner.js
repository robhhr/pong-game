import { SVG_NS, WINNER_TEXT } from '../settings';

export default class Winner {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
        this.message = "";
    }

    setMessage(message) {
        this.message = message;
    }

    render(svg, winner1, winner2) {
        let box = document.createElementNS(SVG_NS, "text");
        box.setAttributeNS(null, "fill", "white");
        box.setAttributeNS(null, "font-size", WINNER_TEXT);
        box.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
        box.setAttributeNS(null, "x", this.x);
        box.setAttributeNS(null, "y", this.y);
        box.textContent = this.message;
        svg.appendChild(box);
    }
}