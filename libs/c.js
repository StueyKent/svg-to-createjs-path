'use strict';

import Command from './command.js';

//C or c - curveto - (x1 y1 x2 y2 x y)+
export default class C extends Command {
  constructor(path) {
    const _command = "C";
    super(_command, path);
    this.points = this.points.chunk(6);
  }

  getCreateJsString(p) {
    
    let prevPoint = null;
    let string = '';

    for(let point of this.points) {
      let x1 = point[0];
      let y1 = point[1];
      let x2 = point[2];
      let y2 = point[3];
      let x = point[4];
      let y = point[5];

      if(this.isReative && prevPoint) {
        x1 = prevPoint[0] + point[0];
        y1 = prevPoint[1] + point[1];
        x2 = prevPoint[2] + point[2];
        y2 = prevPoint[3] + point[3];
        x = prevPoint[4] + point[4];
        y = prevPoint[5] + point[5];
      }


      string += `graphic.bezierCurveTo(${x1},${y1},${x2},${y2},${x},${y});\n`;

      prevPoint = point;
    }

    return string;
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