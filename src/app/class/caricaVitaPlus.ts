import { gameObject } from '../interfaces/gameObject';
export class caricaVitaPlus {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let vitePlus : gameObject[] = [];
    let vita1 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 90 ,
      y: 100,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita1);
    let vita2 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 80 ,
      y: 160,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita2);
    let vita3 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 150 ,
      y: 250,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita3);
    let vita4 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 140 ,
      y: 350,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita4);
    let vita5 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 100 ,
      y: 500,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita5);
    
    let vita6 : gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 1750,
      y: 30,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita6);
    let vita7: gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 1700,
      y: 40,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita7);
    let vita8: gameObject = {
      path : "./assets/elementiGioco/vitaPlus.png",
      x: 1650,
      y: 20,
      width: 40,
      height: 40,
      verso: 1,
      display : ""
  }
    vitePlus.push(vita8);
      return vitePlus;
   }
    // Metodi della classe
  
  }
  