'use strict';

import Command from './command.js';

export default class Z extends Command {
  constructor(path) {
    const _command = "Z";
    super(_command, path);
  }
}