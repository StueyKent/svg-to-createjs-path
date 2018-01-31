'use strict';

import Command from './command.js';

//M or m - moveto - (x y)+

export default class M extends Command {
  constructor(path) {
    const _command = "M";
    super(_command, path);
    this.points = this.points.chunk(2);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {
      let point = {x: pointArray[0], y: pointArray[1]}
      if(this.isReative && prevPoint) {
        point.x += prevPoint.x;
        point.y += prevPoint.y;
      }
      string += `graphic.moveTo(${point.x},${point.y});\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
  }
}
