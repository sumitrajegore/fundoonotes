import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons,userIcon, lightbulbIcon, bellIcon, pencilIcon, archiveIcon, trashIcon, cogIcon, barsIcon } from '@cds/core/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

// ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(lightbulbIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(pencilIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(barsIcon);
ClarityIcons.addIcons(userIcon);



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  public collapsed = true;
  public show = false;
  public display = false;
  public openModal = false;
  public cardArray = [] as any;
  detail = [] as any;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.collapsed = true;
    this.getNoteList();

  }
  getNoteList() {
    let id = localStorage.getItem('id');
    let array = [] as any;

    this.userService.getNoteList(id).subscribe((res) => {
      array = res;
      this.cardArray = array.data.data;
      console.log(this.cardArray[0].id);

    })
  }
  trackByMethod(el: any): number {
    return el.id;
  }

  getId(card: any) {
    this.detail = card;
    console.log(this.detail);
  }

  submit() {
    this.show = false;

    if (this.form.valid) {
      console.log("Submit called");
      this.show = false;

      let reqObj = {
        title: this.form.value.title,
        description: this.form.value.description
      }

      console.log(reqObj);

      let id = localStorage.getItem('id');

      this.userService.createNote(reqObj, id).subscribe((res) => {
        console.log(res);
        this.getNoteList();
      }, (error) => {
        console.log(error);
      })

    }
  }


  updateNote() {
    console.log("Method called");
    this.openModal = false;

    let id = this.detail.id;
    console.log(id);

    let token = localStorage.getItem('id');

    let reqObj = {
      noteId: id,
      title: this.form.value.title,
      description: this.form.value.description
    }

    console.log(reqObj);

    this.userService.updateNote(reqObj, token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    }, (error) => {
      console.log(error);
    })
  }

  deleteNote() {

    let token = localStorage.getItem('id');
    let reqObj = {
      "isDeleted": true,
      "noteIdList": [this.detail.id]
    }

    this.userService.deleteNote(reqObj, token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    }, (error) => {
      console.log(error);
    })
  }

  public resize() {
    if (this.collapsed == true) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
  }
}
