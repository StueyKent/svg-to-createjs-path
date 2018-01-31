'use strict';

import Command from './command.js';

//H or h - horizontal lineto - x+
export default class H extends Command {
  constructor(path) {
    const _command = "H";
    super(_command, path);
    this.points = this.points.chunk(1);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {
      let point = {x: prevPoint.x, y: pointArray[0]}
      if(this.isReative && prevPoint) {
        point.y += prevPoint.y;
      }
      string += `graphic.lineTo(${point.x},${point.y});\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
  }
}
