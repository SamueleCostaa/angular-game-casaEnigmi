import { gameObject } from '../interfaces/gameObject';
export class caricaBotoleChiave {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let x = 630;
    let botoleChiave : gameObject []= [];
    for(let i = 0; i<3; i++){
    let botola1 : gameObject = {
      path : "./assets/elementiGioco/botola-chiave.png",
      x: x,
      y: 100,
      width: 160,
      height:160,
      verso: 1,
      display: ""
    }
    x += 180;
    botoleChiave.push(botola1);
  }
  
  return botoleChiave;
  }
}