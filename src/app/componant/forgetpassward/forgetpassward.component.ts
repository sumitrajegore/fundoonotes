import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from  '../../services/user-service.service';



@Component({
  selector: 'app-forgetpassward',
  templateUrl: './forgetpassward.component.html',
  styleUrls: ['./forgetpassward.component.scss']
})
export class ForgetpasswardComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        email : this.form.value.email
      }

      console.log(reqObj);

      this.userService.forgotService(reqObj).subscribe((res) => {
        console.log(res);
      },(error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
