'use strict';

export default class CommandArray extends Array {

  convertToNumbers() {
    return this.map((item)=>{
      let num = parseInt(item,10)
      return (isNaN(num)) ? item : num;
    })
  }

  chunk() {

  }
}