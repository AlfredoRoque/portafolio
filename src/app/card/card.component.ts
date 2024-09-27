import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name = "{ Alfredo Roque }"
  cvinfo = "(mas info en mi C.V)."
  title = "Sobre mí."
  description = "Soy un desarrollador javar apasionado por la programación y "+
  "por el aprendizaje de nuevas tecnologías. "+
  "He colaborado en proyectos para el estado de puebla y algunos proyectos freelance y personales "
  constructor() { }

  ngOnInit() {
  }

}
