'use strict';

import Command from './command.js';

export default class C extends Command {
  constructor(path) {
    const _command = "C";
    super(_command, path);
  }
}