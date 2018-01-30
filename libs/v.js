'use strict';

import Command from './command.js';

export default class V extends Command {
  constructor(path) {
    const _command = "V";
    super(_command, path);
  }
}