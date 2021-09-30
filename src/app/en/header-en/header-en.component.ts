import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-en',
  templateUrl: './header-en.component.html',
  styleUrls: ['./header-en.component.css']
})
export class HeaderEnComponent implements OnInit {
  lenguage = "en";
  isCollapsed = true;
  constructor() { }

  ngOnInit(){
  }
}
