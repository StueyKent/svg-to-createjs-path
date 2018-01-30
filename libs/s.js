'use strict';

import Command from './command.js';

export default class S extends Command {
  constructor(path) {
    const _command = "S";
    super(_command, path);
  }
}