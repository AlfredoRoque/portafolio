import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { TechnologiComponent } from './technologi/technologi.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,
  HeaderComponent,CardComponent,
  MenuComponent,TechnologiComponent,
  FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  lenguage = "es";

  ngOnInit() {
    var URLactual = window.location.pathname.replace("/","");
    if(URLactual!=""){
      this.lenguage = URLactual;
    }
  }
}


