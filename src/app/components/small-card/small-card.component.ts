import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() title:string="";
  //@Input() urlImg:string="";
  @Input() altImg:string="card01";

  imagens = {
    
      src: "/assets/img/card01.png",
      alt: 'Imagem 1'
    ,
    
      src1: "/assets/img/card02.png",
      alt1: 'Imagem 2'
    ,
    
      src11: "/assets/img/card03.png",
      alt11: 'Imagem 3'
    
  }
  ;

  constructor() { }

  ngOnInit(): void {
  }

}
