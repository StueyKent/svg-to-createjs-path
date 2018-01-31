'use strict';

import Command from './command.js';

//C or c - curveto - (x1 y1 x2 y2 x y)+
export default class C extends Command {
  constructor(path) {
    const _command = "C";
    super(_command, path);
    this.points = this.points.chunk(6);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {
      let point = {x1: pointArray[0], y1: pointArray[1], x2: pointArray[2], y2: pointArray[3], x: pointArray[4], y: pointArray[5]}
      if(this.isReative && prevPoint) {
        point.x1 += prevPoint.x;
        point.y1 += prevPoint.y;
        point.x2 += prevPoint.x;
        point.y2 += prevPoint.y;
        point.x += prevPoint.x;
        point.y += prevPoint.y;
      }
      string += `graphic.bezierCurveTo(${point.x1},${point.y1},${point.x2},${point.y2},${point.x},${point.y});\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
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