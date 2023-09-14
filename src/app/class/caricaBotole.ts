import { gameObject } from '../interfaces/gameObject';
export class caricaBotole {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let x = 630;
    let botole : gameObject []= [];
    for(let i = 1; i<7; i++){
    let botola1 : gameObject = {
      path : "./assets/elementiGioco/botola"+i+".png",
      x: x,
      y: 100,
      width: 70,
      height:70,
      verso: 1,
      display: ""
    }
    x += 90;
    botole.push(botola1);
  }
  x =630;
  for(let i = 7; i<13; i++){
    let botola1 : gameObject = {
      path : "./assets/elementiGioco/botola"+i+".png",
      x: x,
      y: 190,
      width: 70,
      height:70,
      verso: 1,
      display: ""
    }
    x += 90;
    botole.push(botola1);
      
   }
    
  return botole;
  }
}