import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  env = environment;
  myForm!: FormGroup;
  contact: any;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendContact() {
    const today = new Date();
    this.contact = this.myForm.value;
    this.contact.date = today.toISOString().replace('T', ' ').split('.')[0];
    this.contact.status = 'received';

    console.log(this.contact)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(`${this.env.apiBaseURL}/contacts`, this.contact)

    // Salva na API.
    this.http.post(`${this.env.apiBaseURL}/contacts`, JSON.stringify(this.contact), httpOptions)
      .subscribe(response => {
        this.success = true;
      }, error => {
        console.log(error)
      })

    this.myForm.reset();

  }

  reset() {
    this.success = false;
    return false;
  }

}
