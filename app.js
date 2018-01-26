'use strict';

import M from './libs/m.js';
import Z from './libs/z.js';
import L from './libs/l.js';
import H from './libs/h.js';
import V from './libs/v.js';
import C from './libs/c.js';
import S from './libs/s.js';
import Q from './libs/q.js';
import T from './libs/t.js';
import A from './libs/a.js';

class App {
  constructor() {
    this.commandClasses = { M, Z, L, H, V, C, S, Q, T, A };
    this.path = '';
  
  }

  parse(path) {
    this.path = path;
    let commands = this.parseCommands(path);

    let funcs = commands.map((command) => {
      let CommandClass = this.commandClassFactory(command.charAt(0).toUpperCase());
      return new CommandClass(command);
    });
  }

  parseCommands(path) {
    return path.split(/(?=[mzlhvcsqta])/i);
  }

  commandClassFactory(name) {
    return this.commandClasses[name];
  }
}

var app = new App();
const path = 'M175.9 139.8c0 20-16.2 36.1-36.1 36.1H36.1c-20 0-36.1-16.2-36.1-36.1V36.1C0 16.2 16.2 0 36.1 0h103.7c20 0 36.1 16.2 36.1 36.1v103.7z';
app.parse(path);

//M or m - moveto - (x y)+
//Z or z - closepath - (none)
//L or l - lineto - (x y)+
//H or h - horizontal lineto - x+
//V or v - vertical lineto - y+
//C or c - curveto - (x1 y1 x2 y2 x y)+
//S or s - shorthand/smooth curveto - (x2 y2 x y)+
//Q or q - quadratic Bézier curveto - (x1 y1 x y)+
//T or t - Shorthand/smooth quadratic Bézier curveto - (x y)+
//A or a - elliptical arc - (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
