import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { ClarityIcons,trashIcon,bellIcon,userIcon,colorPaletteIcon,imageGalleryIcon,archiveIcon,ellipsisVerticalIcon } from '@cds/core/icon';

ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(colorPaletteIcon);
ClarityIcons.addIcons(imageGalleryIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(ellipsisVerticalIcon);

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public display = false;
  public openModal = false;
  detail = [] as any;
  form: FormGroup;
  deleted = [] as any;
  @Input() cardArray=[];



  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }


  getId(card : any){
    this.detail = card;
    console.log(this.detail);
  }


  updateNote(){
    console.log("Method called");
    this.openModal = false;
    
    let id = this.detail.id;
    console.log(id);

    let token = localStorage.getItem('id');

    let reqObj = {
      noteId: id,
      title :  this.form.value.title ,
      description : this.form.value.description
    }

    console.log(reqObj);

    this.userService.updateNote(reqObj,token).subscribe((res) => {
      console.log(res);
    },(error) => {
      console.log(error);
    })
  }

  deleteNote(){
    this.openModal = false;
    
    let token = localStorage.getItem('id');
    let reqObj = {
      "isDeleted": true,
      "noteIdList": [this.detail.id]
    }

    this.userService.deleteNote(reqObj,token).subscribe((res) => {
      console.log(res);
    },(error) => {
      console.log(error);        
    })
  }

}