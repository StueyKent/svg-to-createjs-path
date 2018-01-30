'use strict';

export default class CommandArray extends Array {

  convertToNumbers() {
    return this.map((item)=>{
      let num = parseFloat(item)
      return (isNaN(num)) ? item : num;
    })
  }

  chunk(chunkSize) {
    let chunks = new CommandArray();
    let i;

    for (i = 0; i < this.length; i += chunkSize) {
      chunks.push(this.slice(i, i + chunkSize));
    }
    
    return chunks;
  }
}