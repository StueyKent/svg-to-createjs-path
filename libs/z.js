'use strict';

import Command from './command.js';

//Z or z - closepath - (none)

export default class Z extends Command {
  constructor(path) {
    const _command = "Z";
    super(_command, path);
    this.points = this.points.chunk(4);
  }

  
  parse(prevPoint) {
    let string = 'graphic.endFill();';
    return {string: string};
  }
}
