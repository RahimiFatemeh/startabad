import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup 
  validationErrors: string[] = [];

  constructor(
    private accountService : AccountService ,
    private fb : FormBuilder ,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm()
  {
    this.registerForm = this.fb.group({
      name : ['' , Validators.required ] , 
      username : ['' , [Validators.required ,Validators.email]] , 
      password : ['' , [Validators.required , Validators.minLength(6)]]
    })
  }
  get password() {  
    return this.registerForm.get('password');  
  } 
  get username() {  
    return this.registerForm.get('username');  
  } 
  register() 
  {
    this.accountService.register(this.registerForm.value).subscribe(() => {
      this.toastr.success("شما با موفقیت ثبت نام شدید")
      this.router.navigateByUrl('/');
    }, error => {
      this.toastr.error(error.error)
      this.validationErrors = error;
    })
  } 
}