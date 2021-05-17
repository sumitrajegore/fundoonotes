import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public openModal = false;
  parrentArray = [] as any;



  constructor(private userService : UserServiceService, private router : Router) { }


  ngOnInit(): void {
    this.getNoteList();
  }

  logout(){
    let id = localStorage.getItem('id');

    this.userService.logout(id).subscribe((res) => {
      console.log(res);
      this.router.navigate(['login'])
    },(error) => {
      console.log(error);
    })
    
  }
  getNoteList(){
    this.openModal = false;
    let id = localStorage.getItem('id');
    let arr = [] as any;
    
    this.userService.getNoteList(id).subscribe((res) => {
      arr = res;  
      console.log(res);
      console.log(arr);
      this.parrentArray = arr.data.data;
      console.log(this.parrentArray);
      console.log(this.parrentArray[2].isDeleted);
      console.log(this.parrentArray);
    })
  }
}
