import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanetasComponent } from "../planetas/planetas.component";

@Component({
  selector: 'app-technologi',
  standalone: true,
  imports: [CommonModule, PlanetasComponent],
  templateUrl: './technologi.component.html',
  styleUrls: ['./technologi.component.css']
})
export class TechnologiComponent implements OnInit {

  Tech = "{ Conocimientos }"
  constructor() { }

  ngOnInit() {
  }

}
