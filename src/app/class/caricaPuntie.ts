import { gameObject } from '../interfaces/gameObject';
export class caricaPuntie {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let puntie : gameObject[] = [];
    let puntoe1 : gameObject = {
      path : "./assets/elementiGioco/pesclamativo.png",
      x: 990,
      y: 800,
      width: 19,
      height:80,
      verso: 1,
      display: ""
    }
    puntie.push(puntoe1);
    let puntoe2 : gameObject = {
      path : "./assets/elementiGioco/pesclamativo.png",
      x: 1350,
      y: 90,
      width: 19,
      height:80,
      verso: 1,
      display: ""
    }
    puntie.push(puntoe2);
    let puntoe3 : gameObject = {
      path : "./assets/elementiGioco/pesclamativo.png",
      x: 1400,
      y: 500,
      width: 19,
      height:80,
      verso: 1,
      display: ""
    }
    puntie.push(puntoe3);
    let puntoe4 : gameObject = {
      path : "./assets/elementiGioco/pesclamativo.png",
      x: 390,
      y: 90,
      width: 19,
      height:80,
      verso: 1,
      display: ""
    }
    puntie.push(puntoe4);
      return puntie;
   }
    // Metodi della classe
  
  }
  