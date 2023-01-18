import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive_Form';
  loginForm = new FormGroup({
    name:new FormControl(''),
    password:new FormControl('')
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
}
