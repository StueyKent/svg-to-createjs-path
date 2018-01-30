'use strict';

import Command from './command.js';

//M or m - moveto - (x y)+

export default class M extends Command {
  constructor(path) {
    const _command = "M";
    super(_command, path);
    this.points = this.points.chunk(2);
  }

  getCreateJsString() {

    let prevPoint = null;
    let string = '';

    for(let point of this.points) {
      let x = point[0];
      let y = point[1];

      if(this.isReative && prevPoint) {
        x = prevPoint[0] + point[0];
        y = prevPoint[1] + point[1];
      }


      string += `graphic.moveTo(${x},${y});\n`;

      prevPoint = point;
    }

    return string;
  }
}

// moveTo ( x  y ) Graphics chainable
// Defined in moveTo:454

// Moves the drawing point to the specified position. A tiny API method "mt" also exists.

// Parameters:
// x Number
// The x coordinate the drawing point should move to.
// y Number
// The y coordinate the drawing point should move to.
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls).