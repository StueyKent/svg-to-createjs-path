'use strict';

import Command from './command.js';

export default class M extends Command {
  constructor(path) {
    const _command = "M";
    super(_command, path);

    this.chunk(this.points);
  }

  chunk(){

  }
}