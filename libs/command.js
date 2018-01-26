'use strict';

export default class Command {
  constructor(command) {
    this.isReative = this.relative(command);
    this.points = this.getPoints(command);

    console.log(this.points);
  }

  relative(command) {
    command = command.charAt(0) 
    return command == command.toUpperCase()
  }

  getPoints(command) {
    return command.slice(1, command.length).split(/(?=[ -])/);
  }
};