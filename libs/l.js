'use strict';

import Command from './command.js';

//L or l - lineto - (x y)+
export default class L extends Command {
  constructor(path) {
    const _command = "L";
    super(_command, path);
    this.points = this.points.chunk(4);
  }
}

// lineTo ( x  y ) Graphics chainable
// Defined in lineTo:466

// Draws a line from the current drawing point to the specified position, which become the new current drawing point. Note that you must call moveTo before the first lineTo(). A tiny API method "lt" also exists.

// For detailed information, read the whatwg spec.

// Parameters:
// x Number
// The x coordinate the drawing point should draw to.
// y Number
// The y coordinate the drawing point should draw to.
// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)