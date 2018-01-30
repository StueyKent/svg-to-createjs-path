'use strict';

import Command from './command.js';

//Q or q - quadratic Bézier curveto - (x1 y1 x y)+
export default class Q extends Command {
  constructor(path) {
    const _command = "Q";
    super(_command, path);
    this.points = this.points.chunk(4);
  }
}

// quadraticCurveTo ( cpx  cpy  x  y ) Graphics chainable
// Defined in quadraticCurveTo:524

// Draws a quadratic curve from the current drawing point to (x, y) using the control point (cpx, cpy). For detailed information, read the whatwg spec. A tiny API method "qt" also exists.

// Parameters:
// cpx Number
// cpy Number
// x Number
// y Number
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)