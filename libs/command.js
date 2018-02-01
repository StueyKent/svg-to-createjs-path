'use strict';

import CommandArray from './commandArray.js';
export default class Command {
  constructor(command, path) {
    this.isReative = this.relative(path);
    this.points = new CommandArray(...this.getPoints(path)).convertToNumbers().clean();
    this.command = command;
  }

  relative(path) {
    let command = path.charAt(0); 
    return command == command.toLowerCase();
  }

  getPoints(path) {
    return path.slice(1, path.length).match(/-?\d*(\.\d+)?/g)
  }

  parse(prevPoint) {
    let string = '';
    return {string: string};
  }

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
};
