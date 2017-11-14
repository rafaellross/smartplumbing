import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: string = "home";

  constructor() { }

  ngOnInit() {
  }

  print(){
    console.log(this.active);
  }
}
