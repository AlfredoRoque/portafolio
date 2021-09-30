import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-en',
  templateUrl: './card-en.component.html',
  styleUrls: ['./card-en.component.css']
})
export class CardEnComponent implements OnInit {
  lenguage = "en";
  name = "{ Alfredo Roque }"
  cvinfo = "(mere info on my C.V)."
  title = "About my."
  description = "I am a junior web developer passionate about programming and "+
  "learning new technologies. "+
  "I have collaborated in projects for the state of Puebla Mexico and some freelance and personal projects."
  constructor() { }

  ngOnInit() {
  }

}
