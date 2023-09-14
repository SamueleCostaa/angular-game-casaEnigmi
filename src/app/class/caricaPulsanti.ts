import { gameObject } from '../interfaces/gameObject';
export class caricaPulsanti {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let pulsanti : gameObject[] = [];
    let but_a : gameObject = {
      path : "./assets/elementiGioco/but-a.png",
      x: 400,
      y: 390,
      width: 70,
      height:50,
      verso: 1,
      display: ""
    }
    pulsanti.push(but_a);
    let but_b : gameObject = {
      path : "./assets/elementiGioco/but-b.png",
      x: 490,
      y: 390,
      width: 70,
      height:50,
      verso: 1,
      display: ""
    }
    pulsanti.push(but_b);
    let but_c : gameObject = {
      path : "./assets/elementiGioco/but-c.png",
      x: 580,
      y: 390,
      width: 70,
      height:50,
      verso: 1,
      display: ""
    }
    pulsanti.push(but_c);
    let but_exit : gameObject = {
      path : "./assets/elementiGioco/but-exit.png",
      x: 855,
      y: 400,
      width: 0,
      height: 0,
      verso: 1,
      display: ""
    }
    pulsanti.push(but_exit);
      return pulsanti;
   }
    // Metodi della classe
  
  }
  