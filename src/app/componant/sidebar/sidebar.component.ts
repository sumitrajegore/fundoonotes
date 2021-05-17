import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  
  public collapsed = true;
  public openModal = false;
  parrentArray = [] as any;

  ngOnInit(): void {
  }

}
