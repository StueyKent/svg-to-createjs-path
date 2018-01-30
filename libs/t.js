'use strict';

import Command from './command.js';

export default class T extends Command {
  constructor(path) {
    const _command = "T";
    super(_command, path);
  }
}