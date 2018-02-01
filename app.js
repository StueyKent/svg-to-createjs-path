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
    this.dom = this.cacheDom();

    this.dom.button.addEventListener('click', this.convert.bind(this));
    this.dom.codeButton.addEventListener('click', this.showHide.bind(this));
  }

  cacheDom(){
    return {
      'input': document.querySelector('.PathInput .PathInput-input'),
      'button': document.querySelector('.PathInput .PathInput-button'),
      'code': document.querySelector('.Code .Code-output'),
      'codeButton': document.querySelector('.Code .Code-button')
    }
  }

  showHide() {
    this.dom.code.classList.toggle('Hidden');
    this.dom.codeButton.innerText = (this.dom.code.classList.contains('Hidden')) ? 'Show' : 'Hide';
  }

  convert() {
    let path = this.dom.input.value;
    if(path.length > 0){
      let string = this.parse(path);
      this.output(string);
      this.draw(string);
    }
  }

  output(string){
    this.dom.code.innerText = string;
  }

  draw(string) {
    var stage = new createjs.Stage("CanvasExample-stage");
    window.eval(string)
    var shape = new createjs.Shape(graphic);
    stage.addChild(shape);
    stage.update();
  }

  parse(path) {
    this.path = path;
    let commands = this.parseCommands(path);

    let funcs = commands.map((command) => {
      let CommandClass = this.commandClassFactory(command.charAt(0).toUpperCase());
      return new CommandClass(command);
    });

    let lastPoint = {x:0, y:0};
    let string = 'var graphic = new createjs.Graphics();\ngraphic.beginFill("#000000");\n';

    for(let func of funcs){
      let parsed = func.parse(lastPoint);
      string += parsed.string;
      lastPoint = parsed.lastPoint;
    }

    return string;
  }

  parseCommands(path) {
    return path.split(/(?=[mzlhvcsqta])/i);
  }

  commandClassFactory(name) {
    return this.commandClasses[name];
  }
}

var app = new App();

//TODO
//AQT

//DONE
//MHLVZCS