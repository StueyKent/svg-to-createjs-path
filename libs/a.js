'use strict';

import Command from './command.js';

//A or a - elliptical arc - (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
export default class A extends Command {
  constructor(path) {
    const _command = "A";
    super(_command, path);
    this.points = this.points.chunk(4);
  }
}

// arc ( x  y  radius  startAngle  endAngle  anticlockwise ) Graphics chainable
// Defined in arc:501

// Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y). For example, to draw a full circle with a radius of 20 centered at (100, 100):

//  arc(100, 100, 20, 0, Math.PI*2);
// For detailed information, read the whatwg spec. A tiny API method "a" also exists.

// Parameters:
// x Number
// y Number
// radius Number
// startAngle Number
// Measured in radians.
// endAngle Number
// Measured in radians.
// anticlockwise Boolean
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)

// arcTo ( x1  y1  x2  y2  radius ) Graphics chainable
// Defined in arcTo:484

// Draws an arc with the specified control points and radius. For detailed information, read the whatwg spec. A tiny API method "at" also exists.

// Parameters:
// x1 Number
// y1 Number
// x2 Number
// y2 Number
// radius Number
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)