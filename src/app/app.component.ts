import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  lenguage = "es";

  ngOnInit() {
    var URLactual = window.location.pathname.replace("/","");
    console.log(URLactual);
    if(URLactual!=""){
      this.lenguage = URLactual;
    }
  }
}


