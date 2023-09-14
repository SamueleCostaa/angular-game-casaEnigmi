import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent{
  x: number = 0;
  y: number = 0;
  xFiamma: number = 150;
  yFiamma: number = 0;
  xMuro: number = 350;
  yMuro: number = 0;
  sposta(where:string):void{

    switch (where){
      case "dx":
        this.x+=10;
        break;
      case "sx":
        this.x-=10;
        break;
      case "su":
        this.y-=10;
        break;
      case "giu":
        this.y+=10;
        break;
    }
    

  }

}
