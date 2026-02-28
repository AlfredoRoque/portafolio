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
    new ProyectData('https://github.com/AlfredoRoque/balances-dialisis-app','https://gestor-balances.rorideas.com/', '../../assets/images/balance-dialisis-front.png', 'Gestor de Balances de Diálisis'),
    new ProyectData('https://github.com/AlfredoRoque/gestor-balances-dialisis','https://api-sistema-ecuaciones-production-3ffb.up.railway.app/swagger-ui/index.html', '../../assets/images/balance-dialisis-back.png', 'API de Balances de Diálisis'),
    new ProyectData('https://github.com/AlfredoRoque/email-sender','', '../../assets/images/email-sender.png', 'Consumer de Envío de Correos(kafka)'),
    new ProyectData('https://github.com/AlfredoRoque/webpag','https://landing-page.rorideas.com/', '../../assets/images/webcamp.PNG', 'Landing Page WebCamp'),
    new ProyectData('','https://siaf.puebla.gob.mx/','../../assets/images/siaf.PNG', 'SIAF Puebla'),
    new ProyectData('https://github.com/AlfredoRoque/CryptoCoins/tree/main','https://crypto.rorideas.com/','../../assets/images/crypto.PNG', 'Crypto Coins'),
    new ProyectData('https://github.com/AlfredoRoque/api-sistema-ecuaciones/tree/version-1','https://rorideas.com/sistema-ecuaciones','../../assets/images/ecuaciones.png', 'Sistema de Ecuaciones'),
    new ProyectData('https://github.com/AlfredoRoque/examen','https://cucas.pythonanywhere.com/','../../assets/images/gestor_emp.PNG', 'Gestor de Empleados'),
    new ProyectData('https://github.com/AlfredoRoque/pokedex','https://poke.rorideas.com/','../../assets/images/poke.PNG', 'Pokedex'),
    new ProyectData('https://github.com/AlfredoRoque/administradorTareas','https://task-administrator.rorideas.com/','../../assets/images/admin.PNG', 'Administrador de Tareas')
  ];


}

class ProyectData {
      constructor(
        public linkRepository: string,
        public linkProject: string,
        public imagesPath: string,
        public name: string,
      ) {}
  }
