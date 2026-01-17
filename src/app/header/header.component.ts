import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lenguage = "es";
  isCollapsed = true;
  constructor() { }

  ngOnInit(){
  }

  downloadCV(event: MouseEvent) {
  const link = event.currentTarget as HTMLAnchorElement;

  link.target = '_blank';
  link.href =
    'https://drive.google.com/u/0/uc?id=14vCT8m2qgVvG2d6OxyJPsVNT7YWUzz67&export=download';
  link.download = 'C.V.pdf';
}
}
