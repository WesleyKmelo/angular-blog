import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {
  dataPubli:string = "";
  
  @Input() titCard:string="Titulo do Card";
  @Input() author:string="autor";
  @Input() criterio:string="";
  
  constructor() { }
  
  ngOnInit(): void {
    const dataAtual = new Date;
    this.dataPubli = dataAtual.toLocaleDateString();
  }

}
