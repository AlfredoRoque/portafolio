import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { TechnologiComponent } from './technologi/technologi.component';
import { CardEnComponent } from './en/card-en/card-en.component';
import { FooterEnComponent } from './en/footer-en/footer-en.component';
import { HeaderEnComponent } from './en/header-en/header-en.component';
import { MenuEnComponent } from './en/menu-en/menu-en.component';
import { TechnologiEnComponent } from './en/technologi-en/technologi-en.component';
import { AppcomponentEnComponent } from './en/appcomponent-en/appcomponent-en.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MenuComponent,
    TechnologiComponent,
    CardEnComponent,
    FooterEnComponent,
    HeaderEnComponent,
    MenuEnComponent,
    TechnologiEnComponent,
    AppcomponentEnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
