'use strict';

import Command from './command.js';

//C or c - curveto - (x1 y1 x2 y2 x y)+
export default class C extends Command {
  constructor(path) {

    //console.log(path)

    const _command = "C";
    super(_command, path);
    this.points = this.points.chunk(6);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {
      let point = {x1: pointArray[0], y1: pointArray[1], x2: pointArray[2], y2: pointArray[3], x: pointArray[4], y: pointArray[5]}
      if(this.isReative && prevPoint) {
        point.x1 = this.round(point.x1 + prevPoint.x, 3);
        point.y1 = this.round(point.y1 + prevPoint.y, 3);
        point.x2 = this.round(point.x2 + prevPoint.x, 3);
        point.y2 = this.round(point.y2 + prevPoint.y, 3);
        point.x = this.round(point.x + prevPoint.x, 3);
        point.y = this.round(point.y + prevPoint.y, 3);

      }
      string += `graphic.bezierCurveTo(${point.x1}, ${point.y1}, ${point.x2}, ${point.y2}, ${point.x}, ${point.y});\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
  }
}
