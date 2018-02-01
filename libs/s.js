'use strict';

import Command from './command.js';

//S or s - shorthand/smooth curveto - (x2 y2 x y)+
export default class S extends Command {
  constructor(path) {
    const _command = "S";
    super(_command, path);
    this.points = this.points.chunk(4);
  }

  parse(prevPoint) {
    let string = '';

    for(let pointArray of this.points) {

      let x1 = this.round(prevPoint.x + (prevPoint.x - prevPoint.x2));
      let y1 = this.round(prevPoint.y + (prevPoint.y - prevPoint.y2));
      
      let point = {x1: x1, y1: y1, x2: pointArray[0], y2: pointArray[1], x: pointArray[2], y: pointArray[3]}
      if(this.isReative && prevPoint) {
        point.x1 = this.round(prevPoint.x + (prevPoint.x - prevPoint.x2));
        point.y1 = this.round(prevPoint.y + (prevPoint.y - prevPoint.y2));
        point.x2 = this.round(point.x2 + prevPoint.x, 3);
        point.y2 = this.round(point.y2 + prevPoint.y, 3);
        point.x = this.round(point.x + prevPoint.x, 3);
        point.y = this.round(point.y + prevPoint.y, 3);

      }
      string += `graphic.bezierCurveTo(${point.x1}, ${point.y1}, ${point.x2}, ${point.y2}, ${point.x}, ${point.y});;\n`;
      prevPoint = point;
    }

    return {string: string, lastPoint: prevPoint};
  }
}