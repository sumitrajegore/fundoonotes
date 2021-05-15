import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router,ActivatedRoute } from '@angular/router';

const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-resetpassward',
  templateUrl: './resetpassward.component.html',
  styleUrls: ['./resetpassward.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);
      
      let token = this.route.snapshot.paramMap.get('token');

      let reqObj = {
        newPassword : this.form.value.password 
      }

      this.userService.resetService(reqObj,token).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}