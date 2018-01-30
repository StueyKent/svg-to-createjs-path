'use strict';

import Command from './command.js';

//S or s - shorthand/smooth curveto - (x2 y2 x y)+
export default class S extends Command {
  constructor(path) {
    const _command = "S";
    super(_command, path);
    this.points = this.points.chunk(4);
  }
}

// bezierCurveTo ( cp1x  cp1y  cp2x  cp2y  x  y ) Graphics chainable
// Defined in bezierCurveTo:540

// Draws a bezier curve from the current drawing point to (x, y) using the control points (cp1x, cp1y) and (cp2x, cp2y). For detailed information, read the whatwg spec. A tiny API method "bt" also exists.

// Parameters:
// cp1x Number
// cp1y Number
// cp2x Number
// cp2y Number
// x Number
// y Number
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)