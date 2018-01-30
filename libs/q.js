'use strict';

import Command from './command.js';

export default class Q extends Command {
  constructor(path) {
    const _command = "Q";
    super(_command, path);
  }
}