'use strict';

import Command from './command.js';

export default class L extends Command {
  constructor(path) {
    const _command = "L";
    super(_command, path);
  }
}