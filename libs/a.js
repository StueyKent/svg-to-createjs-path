'use strict';

import Command from './command.js';

export default class A extends Command {
  constructor(path) {
    const _command = "A";
    super(_command, path);
  }
}