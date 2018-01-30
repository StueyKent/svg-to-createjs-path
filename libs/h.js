'use strict';

import Command from './command.js';

export default class H extends Command {
  constructor(path) {
    const _command = "H";
    super(_command, path);
  }
}