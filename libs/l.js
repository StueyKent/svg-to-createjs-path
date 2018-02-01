'use strict';

import Command from './command.js';

//L or l - lineto - (x y)+
export default class L extends Command {
  constructor(path) {
    const _command = "L";
    super(_command, path);
    this.points = this.points.chunk(2);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {
      let point = {x: pointArray[0], y: pointArray[1]}
      if(this.isReative && prevPoint) {
        point.x = this.round(point.x + prevPoint.x);
        point.y = this.round(point.y + prevPoint.y);
      }
      string += `graphic.lineTo(${point.x}, ${point.y});\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
  }
}