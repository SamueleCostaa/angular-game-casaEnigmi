import { gameObject } from '../interfaces/gameObject';
export class caricaChiavi {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let chiavi: gameObject[] = [];
    let chiave1 : gameObject = {
      path : "./assets/elementiGioco/chiave.png",
      x: 120,
      y: 20,
      width: 40,
      height:80,
      verso: 1,
      display: ""
    }
    chiavi.push(chiave1);
    let chiave2 : gameObject = {
      path : "./assets/elementiGioco/chiave.png",
      x: 1750,
      y: 800,
      width: 40,
      height:80,
      verso: 1,
      display: ""
    }
    chiavi.push(chiave2);
    let chiave3 : gameObject = {
      path : "./assets/elementiGioco/chiave.png",
      x: 2300,
      y: 100,
      width: 40,
      height:80,
      verso: 1,
      display: "none"
    }
    chiavi.push(chiave3);
      return chiavi;
   }
    // Metodi della classe
  
  }
  