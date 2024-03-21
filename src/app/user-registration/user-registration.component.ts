import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  registrationForm: any;
  selectedValue: number = 20 ;
  imageUrl: string = "https://t4.ftcdn.net/jpg/04/32/62/27/240_F_432622715_W5LJ15OpH5mROEr4qPPTwhXwNDCwlmK7.jpg";
  isFormSubmit: boolean = false;
  states: string[] = ['Maharashtra', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh'];
  countries: string[] = ['India', 'Japan', 'Sri Lanka', 'Australia'];
  tags: string[] = [];

  constructor(private fb: FormBuilder , private comser:CommonService) {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mob: [''],
      age: [0, Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      tags: ['', Validators.required],
      newsletter: [false]
    });
  }

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
    } else {
      this.imageUrl = '';
    }
  }





  onSubmit() {
    this.isFormSubmit = true;
    if (this.registrationForm.invalid) {
      return;
    }
// this.comser.sendDtApi(this.registrationForm.value)

    console.log(this.registrationForm.value);
  }

  onClick() {
    this.tags.push(this.registrationForm.get('tags').value);
    console.log(this.tags);
  }


  onCancel() {
    
  }

  get f() {
    return this.registrationForm.controls;
  }


  
  onRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedValue = parseInt(target.value);
  }
}
