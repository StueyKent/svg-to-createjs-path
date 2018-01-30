'use strict';

import CommandArray from './commandArray.js';
export default class Command {
  constructor(command, path) {
    this.isReative = this.relative(path);
    this.points = new CommandArray(...this.getPoints(path)).convertToNumbers();
    this.command = command;
  }

  relative(path) {
    let command = path.charAt(0); 
    return command == command.toLowerCase();
  }

  getPoints(path) {
    return path.slice(1, path.length).split(/(?=[ -])/);
  }

  getCreateJsString() {
    let string = '';
    return string;
  }
};
