'use strict';

import CommandArray from './commandArray.js';
export default class Command {
  constructor(command, path) {
    this.isReative = this.relative(path);
    this.points = new CommandArray(...this.getPoints(path)).convertToNumbers();
    this.command = command;

    console.log(this.command, this.points);
  }

  relative(path) {
    let command = path.charAt(0); 
    return command == command.toUpperCase();
  }

  getPoints(path) {
    return path.slice(1, path.length).split(/(?=[ -])/);
  }
};