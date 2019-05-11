// import { SVG_NS } from '../settings';

// export default class Fire {
//     constructor(fireHeight, fireWidth) {
//         this.fireHeight = fireHeight;
//         this.fireWidth = fireWidth;
//         this.isFiring = false;
//     }

//     fireShot() {
        
//     }

// render(svg) {
//     let rect = document.createElementNS(SVG_NS, "rect");
//     rect.setAttributeNS(null, "width", this.paddleWidth);
//     rect.setAttributeNS(null, "height", this.paddleHeight);
//     rect.setAttributeNS(null, "fill", "white");
//     rect.setAttributeNS(null, "x", this.x);
//     rect.setAttributeNS(null, "y", this.y);    
//     svg.appendChild(rect);
//     if (this.isFiring) {
//         this.fireShot();
//     }
// }
// }