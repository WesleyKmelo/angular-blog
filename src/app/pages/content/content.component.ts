import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/database/database';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgConten:string="";
  titContent:string="";
  pContent:string="";
  private Id:string | null="0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.Id = value.get("id"));

      this.setValuesPageContent(this.Id);
  }

  setValuesPageContent(id:string | null){
    const result = dataFake.filter(item=> item.id == id)[0];
    this.imgConten = result.imgCard;
    this.titContent = result.titCard;
    this.pContent = result.pCOnteudo;
  }

}
