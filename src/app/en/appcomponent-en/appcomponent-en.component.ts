import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appcomponent-en',
  templateUrl: './appcomponent-en.component.html',
  styleUrls: ['./appcomponent-en.component.css']
})
export class AppcomponentEnComponent implements OnInit {
  lenguage = "en";

  ngOnInit() {
    var URLactual = window.location.pathname.replace("/","");
    if(URLactual!=""){
      this.lenguage = URLactual; 
    }
  }

}
