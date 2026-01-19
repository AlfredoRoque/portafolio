import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  portafolio = "{ Portafolio }"
  constructor() { }

  ngOnInit() {
  }

  images: string[] = [
    '../../assets/images/webcamp.PNG',
    '../../assets/images/gestor_emp.PNG',
    '../../assets/images/poke.PNG',
    '../../assets/images/admin.PNG',
    '../../assets/images/crypto.PNG',
    '../../assets/images/siaf.PNG',
  ];
}
