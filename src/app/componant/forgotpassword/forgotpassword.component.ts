import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

const REGEXEMAIL = new RegExp("^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$");

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,  private userService: UserServiceService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        email : this.form.value.email
      }

      this.userService.forgotService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })

    }
  }

  ngOnInit(): void {
  }

}
