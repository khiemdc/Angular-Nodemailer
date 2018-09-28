import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder,
    private contactService: ContactService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  sendMail(name, email, message) {
    console.log('????');
    this.contactService.sendMail(name, email, message).subscribe(success => {
      console.log('????' + success);
      this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 5000 });
      console.log(success);
    }, error => {
      this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
    });
  }
  ngOnInit() {
  }

}