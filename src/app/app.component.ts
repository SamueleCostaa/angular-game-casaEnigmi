import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { gameObject } from './interfaces/gameObject'; //interface oggetto di gioco, contiene variabili collegate allo stile degli elementi
/** 
 * 
 * classi che contengono gli oggetti di gioco e tutte le caratteristiche di ciascun oggetto
 * 
 *  */
import { caricaMuri } from './class/caricaMuri'; 
import { caricaBotole } from './class/caricaBotole';
import { caricaBotoleChiave } from './class/caricaBotoleChiave';
import { caricaFiamme } from './class/caricaFiamme';
import { caricaChiavi } from './class/caricaChiavi';
import { caricaVitaPlus } from './class/caricaVitaPlus';
import { caricaLampadine } from './class/caricaLampadine';
import { caricaPuntie } from './class/caricaPuntie';
import { caricaPuntii } from './class/caricaPuntii';
import { caricaPulsanti } from './class/caricaPulsanti';
import { Avviso } from './interfaces/avviso';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  //@ViewChild("playground") playground! : HTMLDivElement;
 
  velocita : number = 10; //velocita omino, passi ogni tocco del pulsante 
  limiteD : number = 1800; //limite destro
  limiteI : number = 1000; //limite inferiore
  
  
  omino : gameObject = {
    path : "./assets/walter/walt-spalle.png",
    x: this.limiteD/2,
    y: this.limiteI-80,
    width: 50,
    height: 70,
    verso: 1,
    display: ""
  };
  cuore : gameObject = {
    path : "./assets/elementiGioco/vita.png",
    x: 0,
    y: 0,
    width: 30,
    height:30,
    verso: 1,
    display: ""
  }
  perg : gameObject = {
    path : "./assets/elementiGioco/pergVuota.png",
    x: this.limiteD/2-250,
    y: this.limiteI/2-250,
    width: 650,
    height:600,
    verso: 1,
    display: "none"
  }
  ragno : gameObject = {
    path : "./assets/elementiGioco/ragno.png",
    x: 230,
    y: 13,
    width: 250,
    height:200,
    verso: 1,
    display: ""
  }
  buco : gameObject = {
    path : "./assets/elementiGioco/buco.png",
    x: 1330,
    y: 800,
    width: 250,
    height:250,
    verso: 1,
    display: ""
  }
  avviso : Avviso = {
    title: "Benvenuto in EscapeWood",
    body : "Gli enigmi della csa di legno"
  }

  macchiaS : gameObject = {
    path : "./assets/elementiGioco/sangue.png",
    x: 1730 ,
    y: 100,
    width: 80,
    height: 80,
    verso: 1,
    display : ""
  }
  lame : gameObject = {
    path : "./assets/elementiGioco/lame.png",
    x: 1680 ,
    y: 80,
    width: 0,
    height: 120,
    verso: 0,
    display : ""
  }

  /*
   
  creazione vettori che sono direttamente collegati a dei div dell'html tramite ngfor 
   
  */

  vita : gameObject [] = [this.cuore, this.cuore, this.cuore,this.cuore,this.cuore,this.cuore,this.cuore,this.cuore,this.cuore]; //array punti vita
  elementiSchermo : gameObject [] = []; //array per elementi generici dello schermo
  //puntiTrigger : gameObject [] = [];
  //puntiTriggerVitaPlus : gameObject [] = [];
  /** array specifici, ogni array a ha un comportamento diverso alla collisione dei suoi elementi */
  muri : gameObject [] = [];
  botole : gameObject [] = [];
  botoleChiave : gameObject [] = [];
  lampadine : gameObject [] = [];
  puntii : gameObject [] = [];
  puntie : gameObject [] = [];
  fiamme : gameObject [] = [];
  vitePlus : gameObject [] = [];
  chiavi : gameObject [] = [];
  chiaviOttenute : gameObject [] = [];
  pulsanti : gameObject [] = [];
  sangue : gameObject [] = [];


  
  audioPath : string = "./assets/audio/xDeviruchi - Exploring The Unknown.wav";
  morteAudio = new Audio("./assets/audio/videogame-death-sound-43894.mp3");
  indovAudio = new Audio("./assets/audio/level-up-enhancement-8-bit-retro-sound-effect-153002.mp3");
  vittoriaAudio = new Audio("./assets/audio/winsquare-6993.mp3");
  dannoAudio = new Audio("./assets/audio/hurt_c_08-102842.mp3");
  vitaPAudio = new Audio("./assets/audio/8-bit-powerup-6768.mp3");
  chiaveAudio = new Audio("./assets/audio/item-39146.mp3");



  /* sequenza corretta per vincere il gioco */
  sequenzaCorretta : string [] = ["./assets/elementiGioco/botola3.png","./assets/elementiGioco/botola10.png", "./assets/elementiGioco/botola7.png"];
  botoleSequenza : gameObject [] = []; //la sequenza che verra figurata nell'hud

  passi : number = 0; //contatore passi omino
  chiaviPrese : number = 0; //contatore chiavi prese
  botoleAperte : number = 0; //contatore botole aperte
  /*stile pulsante inizia, pulsante visualizzato all'apertura della pagina */
  iniziaPosition : string = "fixed";
  iniziaW : number = this.limiteD/2;
  iniziaH : number = this.limiteI/2;
  iniziaFsize : number = 40;
  titoloBtnInizia : string = `Inizia l'avventura! Muovi il
                                tuo personaggio utilizzando i tasti direzionali! Clicca qui per cominciare a giocare!`;
  iniziaTop : number = this.limiteI/2-300;
  iniziaRight: number = this.limiteD/2 ;
  iniziaPadBot : number = 90;
  iniziaPad : number = 30;
  /* fine stile pulsante inizia */
  testoBtnMusica : string = "Rimuovi musica";
  flagBtnStop : boolean=false;

  //lista suggerimenti che vengono visualizzati alla collisione con le lampadine
  suggerimenti : string [] = [
    "Questi sono i suggerimenti, non ne troverai molti ma se riuscirai a raggiungerli ti daranno importanti informazioni! PS: Attento alle fiamme.",
    "Guarda sotto le botole",
    "E' davanti a tutti, è in piedi ma non è persona, taglia e nel campo di battaglia s'erge, minacciosa, alta e fiera appare.",
    " 😐 ",
    "Nel mezzo c'è il vuoto"
  ];

  //lista avvisi che vengono visualizzati alla collisione con i punti esclamativi
  avvisi : string [] = [
    "Stai per iniziare l'avventura. Muoviti con i tasti direzionali! Ricordati se morirai dovrai ricominciare!",
    "Tocca i simboli nella sequenza esatta e premi il pulsante verde per uscire e vincere! ",
    "Risolvi tutti gli enigmi per uscire dalla stanza e terminare il gioco!",
    "I suggerimenti contengono degli indizi per la sequenza"
    
  ];

  //lista indovinelli che vengono visualizzati alla collisione con i punti interrogativi
  indov : string [] = [
    "Questi sono gli indovinelli, risolvili e sarai più vicino all'uscita!",
    "Quando si alza non fa alcun rumore, ma sveglia tutti.:  (A) Una gallina \n(B) Il Sole \n(C) un albero"
  ]; 
  
  /* 

    creazione istanze delle classi che contengono i metodi per caricare i vettori che 
    stamperanno a schermo gli oggetti del gioco

  */

  caricaMuri = new caricaMuri();
  caricaBotole = new caricaBotole();
  caricaFiamme = new caricaFiamme();
  caricaChiavi = new caricaChiavi();
  caricaVitaPlus = new caricaVitaPlus();
  caricaLampadine = new caricaLampadine();
  caricaPuntie = new caricaPuntie();
  caricaPuntii = new caricaPuntii();
  caricaPulsanti = new caricaPulsanti();
  caricaBotoleChiave = new caricaBotoleChiave();

  //funzione stop musica
  stopMusica(){
    if(!this.flagBtnStop){
      this.audioPath=""; //rimuovo la path del tag audio dell'html cosi da non riprodurre nulla
      this.testoBtnMusica = "Riproduci musica";
      this.flagBtnStop = true;
  } else {
      this.audioPath="./assets/audio/xDeviruchi - Exploring The Unknown.wav";
      this.testoBtnMusica="Rimuovi musica";
      this.flagBtnStop = false;
  }
  }
  /* 
  
   funzione controller movimento 
   
  */

  
  muovi(o : gameObject, event : KeyboardEvent){
    //console.log("premuto pulsante");

    //controllo vite
    if(this.vita.length==0){ 
      this.audioPath = "";
      this.chiaveAudio.pause();
      this.dannoAudio.pause();
      this.morteAudio.play();
      alert("Hai finito le vite, ritenta!");

      location.reload();
    }
    //contatore passi
    this.passi++;
    this.perg.display  ="none";
    switch(event.key) {
      case 'ArrowUp':
        //console.log("pressed up");
        o.y-=this.velocita;
        if(this.passi%2 == 0)
        o.path = "./assets/walter/walt-dx.png"
        else
        o.path = "./assets/walter/walt-sx.png"
      break;
      case 'ArrowDown':
        if(this.passi%2 == 0)
        o.path = "./assets/walter/walt-serio.png"
        else
        o.path = "./assets/walter/walt-serio.png"
       // console.log("pressed down");
        o.y+=this.velocita;
      break;
      case 'ArrowLeft':
        o.path = "./assets/walter/walt-lato.png";
       // console.log("pressed left");
        o.verso = -1;
        o.x-=this.velocita;
      break;
      case 'ArrowRight':
       
        o.path = "./assets/walter/walt-lato.png";
       // console.log("pressed right");
        o.verso = 1;
        o.x+=this.velocita;
      
      break;
    }

    this.checkBordi();
    this.checkMuro();
    this.checkCollision();
  }
 


  
   //funzione che previene lo zoom della pagina
   preventZoom()  {

    //intercetto l'evento wheel del mouse e prevengo la sua funzione
    document.addEventListener("wheel", (event) => {
        // Impedisci lo zoom della pagina
        event.preventDefault();
       
        console.log("zoom")
      }, {passive:false});
   }  
    
  /*
  
    codice che verrà eseguito all'apertura dell'html

  */
 
  ngOnInit(){

    //setto il volume della musica al 10% del volume massimo
    document.getElementsByTagName("audio")[0].volume = 0.1;

    /* codice per evitare lo spsotamento della schermata premendo i tasti direzionali */
    
      this.preventZoom()
      document.onkeydown = function(e) {
       if (e.keyCode >= 37 && e.keyCode <= 40) {
         e.preventDefault();
        }
      
      };
  //alert("Il gioco sta per iniziare!\nClicca su inizia per giocare");
     console.log("Crea is running");
      let nodo = this.omino;
      this.elementiSchermo.push(this.ragno);
      this.elementiSchermo.push(this.buco);
      this.elementiSchermo.push(nodo); //inserisco omino a schermo
  
  /* caricamento di tutti gli elementi di gioco*/
 
      this.muri = this.caricaMuri.carica(); //richiamo metodi di carica degli elementi
      this.botole = this.caricaBotole.carica();
      this.fiamme = this.caricaFiamme.carica();
      this.chiavi = this.caricaChiavi.carica();
      this.vitePlus = this.caricaVitaPlus.carica();
      this.lampadine = this.caricaLampadine.carica();
      this.puntie  = this.caricaPuntie.carica();
      this.puntii = this.caricaPuntii.carica();
      this.botoleChiave = this.caricaBotoleChiave.carica();
      this.sangue.push(this.macchiaS);
      this.sangue.push(this.lame);
  }
  
  flagBtnInizia : boolean = false; //variabile che controlla se è stato premuto il pulsante di inizio una volta
  inizia(){
      
    if(!this.flagBtnInizia){
        //stile del pulsante inizia dopo il click
        this.flagBtnInizia = true;
        this.titoloBtnInizia = "Torna al gioco";
        this.iniziaFsize = 20;
        //animazioni button inizia
        let interval = setInterval(() => {this.iniziaW -= 3; if(this.iniziaW <350){clearInterval(interval)} }, 0.5);
        let interval2 = setInterval(() => {this.iniziaH -= 3; if(this.iniziaH <= 90){clearInterval(interval2)} }, 0.5);
        let interval3 = setInterval(() => {this.iniziaRight -= 20; if(this.iniziaRight <= 10){clearInterval(interval3)} }, 0.5);
        let interval4 = setInterval(() => {this.iniziaTop -= 10; if(this.iniziaTop <= 5){clearInterval(interval4)} }, 0.5);
        //fine animazioni
        this.iniziaPadBot = 30;
        this.iniziaPad = 20;

    }
  }

//funzione per ricaricare la pagina
  reset(){
    location.reload();
  }


//funzione che gestisce le collisioni del player con gli oggetti di gioco

  checkCollision() {

/** collisione con fiamme */

    for (const elemento of this.fiamme) {
      if (
        //controllo se il player entre nella zona dell'elemento 
        this.omino.x < elemento.x + elemento.width &&
        this.omino.x + this.omino.width > elemento.x &&
        this.omino.y < elemento.y + elemento.height &&
        this.omino.y + this.omino.height > elemento.y
      ) {
        // Si è verificata una collisione, esegue l'azione desiderata
        this.dannoAudio.play();
        this.vita.pop(); //tolgo un cuore alla barra delle vite
      } 
    }

/** collisione con vitePlus */

      for (let i : number = 0; i<this.vitePlus.length; i++) {
        if (
          this.omino.x < this.vitePlus[i].x + this.vitePlus[i].width &&
          this.omino.x + this.omino.width > this.vitePlus[i].x &&
          this.omino.y < this.vitePlus[i].y + this.vitePlus[i].height &&
          this.omino.y + this.omino.height >this.vitePlus[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
          this.vitaPAudio.volume = 0.5;
          this.vitaPAudio.play();
          this.vitePlus[i].display = "none";
          this.vitePlus.splice(i,1);
         
          console.log("collisione vita plus");
         this.vita.push(this.cuore);
        }
      }

/** collisione con punti interrogativi */

      for(let i : number = 0; i<this.puntii.length; i++){
        if (
          this.omino.x < this.puntii[i].x + this.puntii[i].width &&
          this.omino.x + this.omino.width > this.puntii[i].x &&
          this.omino.y < this.puntii[i].y + this.puntii[i].height &&
          this.omino.y + this.omino.height >this.puntii[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata

         if(i==1 && this.pulsanti.length == 0) {
          this.pulsanti = this.caricaPulsanti.carica();
        }
          console.log("collisione ?");
          this.perg.display="";
          this.avviso.title = "Indovinello",
          this.avviso.body = this.indov[i];
        }

      }

/** collisione con pulsanti */

      for(let i : number = 0; i<this.pulsanti.length; i++){
        //animazione pulsanti premuti, set dei pulsanti non premuti
        if(i==0){
          this.pulsanti[i].path="./assets/elementiGioco/but-a.png";
        }
        if(i==1){
          this.pulsanti[i].path="./assets/elementiGioco/but-b.png";
        }
        if(i==2){
          this.pulsanti[i].path="./assets/elementiGioco/but-c.png";
        }
        if(i==3){
          this.pulsanti[i].path="./assets/elementiGioco/but-exit.png";
        }

        if (
          this.omino.x < this.pulsanti[i].x + this.pulsanti[i].width &&
          this.omino.x + this.omino.width > this.pulsanti[i].x &&
          this.omino.y < this.pulsanti[i].y + this.pulsanti[i].height &&
          this.omino.y + this.omino.height >this.pulsanti[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
          // animazione pulsanti premuti, cambio l'immagine del pulsante, pulsante premuto

          if(i==0){
            this.pulsanti[i].path="./assets/elementiGioco/but-a-pressed.png";
            this.vita.splice(i, this.vita.length-1);
            //toglie tutti i punti vita meno uno
          }
          if(i==1){
            //se preme il pulsante b compare la chiave
            this.pulsanti[i].path="./assets/elementiGioco/but-b-pressed.png";
            this.chiavi[2].display="";
            this.chiavi[2].x = 500;
            this.chiavi[2].y = 250;
          }
          if(i==2){
            this.pulsanti[i].path="./assets/elementiGioco/but-c-pressed.png";
            this.vita.splice(i, this.vita.length-1);
             //toglie tutti i punti vita meno uno
          }
          if(i==3){
            //pulsante uscita
            this.pulsanti[i].path="./assets/elementiGioco/but-exit-pressed.png";

            //controlla sequenza corretta, se ha inserito la sequenza corretta vince
            if(this.botoleSequenza.length == 3){
              let vittoria : number = 0;
              console.log("vittoria: "+vittoria);
              for(let i : number = 0; i<3; i++){
              if(this.botoleSequenza[i].path == this.sequenzaCorretta[i]){
                vittoria++; 
                
                /*
                
                  se il path dell'immagine della botola selezionate "i" è uguale all'elemento "i" della sequenza corretta
                  aumento un contatore 
                
                */
              }
            }
              if(vittoria == 3) { //se il contatore arriva a 3 il gioco è finito
                this.vittoriaAudio.play();
                alert("Sei riusito ad uscire! hai vinto!"); 
                location.reload(); //riavvio
                //vittoria
            } else {
              this.dannoAudio.play()
              alert("Sequenza sbagliata!");
              this.botoleSequenza.splice(0, 3);
            }
          }
          }

        }
        
      }

/** collisione con punti esclamativi */

      for(let i : number = 0; i<this.puntie.length; i++){
        if (
          this.omino.x < this.puntie[i].x + this.puntie[i].width &&
          this.omino.x + this.omino.width > this.puntie[i].x &&
          this.omino.y < this.puntie[i].y + this.puntie[i].height &&
          this.omino.y + this.omino.height >this.puntie[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
         
         
         console.log("collisione !");
         this.perg.display="";
         this.avviso.title = "Messaggio di gioco",
         this.avviso.body = this.avvisi[i];
         
        

        }
        
      }

/** collisione con lampadine */

      for(let i : number = 0; i<this.lampadine.length; i++){
        if (
          this.omino.x < this.lampadine[i].x + this.lampadine[i].width &&
          this.omino.x + this.omino.width > this.lampadine[i].x &&
          this.omino.y < this.lampadine[i].y + this.lampadine[i].height &&
          this.omino.y + this.omino.height >this.lampadine[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
         
         
        console.log("collisione ?");
         this.perg.display="";
         this.avviso.title = "Suggerimento",
         this.avviso.body = this.suggerimenti[i];
         
        

        }
        
      }

/** collisione con chiavi */

      for(let i : number = 0; i<this.chiavi.length; i++){
        if (
          this.omino.x < this.chiavi[i].x + this.chiavi[i].width &&
          this.omino.x + this.omino.width > this.chiavi[i].x &&
          this.omino.y < this.chiavi[i].y + this.chiavi[i].height &&
          this.omino.y + this.omino.height >this.chiavi[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata


        console.log("collisione chiave");
        this.chiaveAudio.play();
        this.chiavi[i].width=0; //dopo la collisione le chiavi scompaiono
        this.chiavi[i].height=0;
          
        this.chiaviPrese++;

        }

      }

/** collisione con sangue */

      for(let i : number = 0; i<this.sangue.length; i++){
        if (
          this.omino.x < this.sangue[i].x + this.sangue[i].width &&
          this.omino.x + this.omino.width > this.sangue[i].x &&
          this.omino.y < this.sangue[i].y + this.sangue[i].height &&
          this.omino.y + this.omino.height >this.sangue[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
          if(i == 0){
           
           
              this.sangue[1].width=150;
              this.vita.splice(0, this.vita.length);
            
          }

        

        }

      }

/** collisione con botole chiuse */    

      for(let i : number = 0; i<this.botoleChiave.length; i++){
        if (
          this.omino.x < this.botoleChiave[i].x + this.botoleChiave[i].width &&
          this.omino.x + this.omino.width > this.botoleChiave[i].x &&
          this.omino.y < this.botoleChiave[i].y + this.botoleChiave[i].height &&
          this.omino.y + this.omino.height >this.botoleChiave[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata

        
        switch(i) {
          case 0:
            if(this.chiaviPrese >= 1) {

                this.botoleChiave[i].height -= 10; //apertura dinamica delle botole
    
              this.botoleAperte++;
            }
            break;
          case 1: 
            if(this.chiaviPrese > 1) {
              this.botoleChiave[i].height -= 10;
              this.botoleAperte++;
          }
            break;
          case 2:
            if(this.chiaviPrese > 2) {
              this.botoleChiave[i].height -= 10;
              this.botoleAperte++;
            }
            break;
        }

        }

      }

/** se sono state aperte tutte le botole permetto di inserire la sequenza */
     
      if(this.botoleAperte >= 3) {
        
        this.pulsanti[3].height = 75;
        this.pulsanti[3].width = 100;
        
         for(let i : number = 0; i<this.botole.length; i++){
        if (
          this.omino.x < this.botole[i].x + this.botole[i].width &&
          this.omino.x + this.omino.width > this.botole[i].x &&
          this.omino.y < this.botole[i].y + this.botole[i].height &&
          this.omino.y + this.omino.height >this.botole[i].y
        ) {
          // Si è verificata una collisione, esegui l'azione desiderata
          
          if(this.botoleSequenza.length <3){
            this.botoleSequenza.push(this.botole[i]); 

          } else {
            
            
            this.botoleSequenza.splice(0,this.botoleSequenza.length-1);
          }
        
        }

      }
      }
      
  }

/** blocco il player quando tocca i muri e i bordi */
  checkMuro() {
    let omX = this.omino.x;
    let omY = this.omino.y;
    let omH = this.omino.height;
    let omW = this.omino.width;
  
    for (const m of this.muri) {
      // Controllo collisione con il lato superiore del muro
      if (omX + omW > m.x && omX < m.x + m.width && omY + omH > m.y && omY < m.y) {
        this.omino.y = m.y - omH;
      }
      // Controllo collisione con il lato inferiore del muro
      else if (omX + omW > m.x && omX < m.x + m.width && omY < m.y + m.height && omY + omH > m.y + m.height) {
        this.omino.y = m.y + m.height;
      }
      // Controllo collisione con il lato sinistro del muro
      else if (omY + omH > m.y && omY < m.y + m.height && omX + omW > m.x && omX < m.x) {
        this.omino.x = m.x - omW;
      }
      // Controllo collisione con il lato destro del muro
      else if (omY + omH > m.y && omY < m.y + m.height && omX < m.x + m.width && omX + omW > m.x + m.width) {
        this.omino.x = m.x + m.width;
      }
    }
  }
  
  checkBordi(){

      if(this.omino.x>this.limiteD-this.omino.width){
        this.omino.x =this.limiteD-this.omino.width;
      }
      if(this.omino.x<0+this.omino.width-30){
        this.omino.x = 0+this.omino.width-30;
      }
      if(this.omino.y+this.omino.height>this.limiteI){
        this.omino.y = this.limiteI-this.omino.height;
      }
      if(this.omino.y<0+20){
        this.omino.y = 0+20;
      }

    }

  }