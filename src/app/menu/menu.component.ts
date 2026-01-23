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

  proyects:ProyectData[] = [
    new ProyectData('https://github.com/AlfredoRoque/webpag','https://webcamp-dev.herokuapp.com/', '../../assets/images/webcamp.PNG'),
    new ProyectData('https://github.com/AlfredoRoque/examen','https://examen-22.herokuapp.com/','../../assets/images/gestor_emp.PNG'),
    new ProyectData('https://github.com/AlfredoRoque/pokedex','https://poke.rorideas.com/','../../assets/images/poke.PNG'),
    new ProyectData('https://admin-projects.herokuapp.com/login.php','https://github.com/AlfredoRoque/administradorTareas','../../assets/images/admin.PNG'),
    new ProyectData('https://github.com/AlfredoRoque/CryptoCoins/tree/main','https://crypto.rorideas.com/','../../assets/images/crypto.PNG'),
    new ProyectData('','https://siaf.puebla.gob.mx/','../../assets/images/siaf.PNG'),
  ];


}

class ProyectData {
      constructor(
        public linkRepository: string,
        public linkProject: string,
        public imagesPath: string,
      ) {}
  }
