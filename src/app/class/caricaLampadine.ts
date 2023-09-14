import { gameObject } from '../interfaces/gameObject';
export class caricaLampadine {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let lampadine : gameObject[] = [];
    let lamp1 : gameObject = {
      path : "./assets/elementiGioco/lampadina.png",
      x: 1450,
      y: 690,
      width: 38,
      height:52,
      verso: 1,
      display: ""

    }
   lampadine.push(lamp1);
    let lamp2 : gameObject = {
      path : "./assets/elementiGioco/lampadina.png",
      x: 1750,
      y: 930,
      width: 38,
      height:52,
      verso: 1,
      display: ""

    }
   lampadine.push(lamp2);
    let lamp3 : gameObject = {
      path : "./assets/elementiGioco/lampadina.png",
      x: 1450,
      y: 40,
      width: 38,
      height:52,
      verso: 1,
      display: ""

    }
   lampadine.push(lamp3);
    let lamp4 : gameObject = {
      path : "./assets/elementiGioco/lampadina.png",
      x: 40,
      y: 930,
      width: 38,
      height:52,
      verso: 1,
      display: ""

    }
   lampadine.push(lamp4);
   let lamp5 : gameObject = {
    path : "./assets/elementiGioco/lampadina.png",
    x: 260,
    y: 20,
    width: 38,
    height:52,
    verso: 1,
    display: ""

  }
 lampadine.push(lamp5);
      return lampadine;
   }
    // Metodi della classe
  
  }
  