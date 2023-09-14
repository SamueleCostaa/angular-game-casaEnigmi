import { gameObject } from '../interfaces/gameObject';
export class caricaPuntii {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let puntii : gameObject[] = [];
    let puntoi1 : gameObject = {
      path : "./assets/elementiGioco/pinterrogativo.png",
      x: 800,
      y: 800,
      width: 40,
      height:75,
      verso: 1,
      display: ""
    }
    puntii.push(puntoi1);
    let puntoi2 : gameObject = {
      path : "./assets/elementiGioco/pinterrogativo.png",
      x: 1580,
      y: 20,
      width: 40,
      height:75,
      verso: 1,
      display: ""
    }
    puntii.push(puntoi2);
      return puntii;
   }
    
  
  }
  