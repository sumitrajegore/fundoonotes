import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from  '../../services/user-service.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resetpassward',
  templateUrl: './resetpassward.component.html',
  styleUrls: ['./resetpassward.component.scss']
})
export class ResetpasswardComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
      // password1: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      let token = this.route.snapshot.paramMap.get('token');
      
      let reqObj = {
        newPassword : this.form.value.password
      }

      console.log(reqObj);

      this.userService.resetService(reqObj,token).subscribe((res) => {
        console.log(res);
      },(error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
