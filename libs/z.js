'use strict';

import Command from './command.js';

//Z or z - closepath - (none)

export default class Z extends Command {
  constructor(path) {
    const _command = "Z";
    super(_command, path);
    this.points = this.points.chunk(4);
  }

  
  getCreateJsString() {
    let string = 'graphic.endFill();';
    return string;
  }
}

// endFill () Graphics chainable
// Defined in endFill:682

// Ends the current sub-path, and begins a new one with no fill. Functionally identical to beginFill(null). A tiny API method "ef" also exists.

// Returns:
// Graphics: The Graphics instance the method is called on (useful for chaining calls.)