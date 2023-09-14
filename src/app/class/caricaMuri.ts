import { gameObject } from '../interfaces/gameObject';
export class caricaMuri {
    // Proprietà della classe
    
  
    // Costruttore
    constructor() {
        
        
    }
   carica() : gameObject[] {
    let muri : gameObject[] = [];
    let muro7 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 1500,
        y: 600,
        width: 30,
        height:220,
        verso: 1,
        display: ""
      }
      muri.push(muro7);
      let muro : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 1200,
        y: 790,
        width: 300,
        height:30,
        verso: 1,
        display: ""
      }
      muri.push(muro);
      
      let muro3 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 1200,
        y: 700,
        width: 30,
        height:100,
        verso: -1,
        display: ""
      }
      muri.push(muro3);
      let muro4 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 18,
        y: 795,
        width: 310,
        height:30,
        verso: 1,
        display: ""
      }
      muri.push(muro4);
      let muro5 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 1200,
        y: 600,
        width: 300,
        height:30,
        verso: 1,
        display: ""
      }
     muri.push(muro5);
      let muro6 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 200,
        y: 10,
        width: 30,
        height:600,
        verso: 1,
        display: ""
      }
      muri.push(muro6);
      let muro8 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 1400,
        y: 10,
        width: 30,
        height:300,
        verso: -1,
        display: ""
      }
      muri.push(muro8);
      let muro9 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 1400,
        y: 300,
        width: 300,
        height:30,
        verso: -1,
        display: ""
      }
      muri.push(muro9);
      let muro10 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 1400,
        y: 300,
        width: 300,
        height:30,
        verso: -1,
        display: ""
      }
      muri.push(muro10);
      let muro11 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 700,
        y: 700,
        width: 150,
        height:30,
        verso: -1,
        display: ""
      }
      muri.push(muro11);
      let muro16 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 950,
        y: 700,
        width: 150,
        height:30,
        verso: -1,
        display: ""
      }
      muri.push(muro16);
      let muro14 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 700,
        y: 700,
        width: 30,
        height:305,
        verso: -1,
        display: ""
      }
      muri.push(muro14);
      let muro15 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 1100,
        y: 700,
        width: 30,
        height:305,
        verso: -1,
        display: ""
      }
      muri.push(muro15);
      let muro12 : gameObject = {
        path : "../assets/elementiGioco/wallVert.jpg",
        x: 300,
        y: 890,
        width: 30,
        height:120,
        verso: -1,
        display: ""
      }
      muri.push(muro12);
      let muro13 : gameObject = {
        path : "../assets/elementiGioco/wall.jpg",
        x: 18,
        y: 580,
        width: 100,
        height:30,
        verso: -1,
        display: ""
      }
      muri.push(muro13);
      let sassi : gameObject = {
        path : "../assets/elementiGioco/sassi.png",
        x: 30,
        y: 750,
        width: 200,
        height:100,
        verso: -1,
        display: ""
      }
      muri.push(sassi);
      return muri;
   }
    // Metodi della classe
  
  }
  