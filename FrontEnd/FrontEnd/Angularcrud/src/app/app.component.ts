import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApicrudComponent } from "./apicrud/apicrud.component";
import { Observable } from 'rxjs';
import { Contact } from '../Model/Contact.model';
import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApicrudComponent, AsyncPipe,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title="ndjsfj";


  onDelete(id: number){
    debugger;
    this.httpClient.delete(`https://localhost:7264/api/Contact?id=${id}`,{responseType:'text'})
    .subscribe({
      next:(value) => {
        debugger;
        console.log(value)
        this.getdata();
        this.contactform.reset();
      }
     })
  }




contactform = new FormGroup({
  name:new FormControl<string>(""),
  email:new FormControl<string>(""),
  phoneNumber:new FormControl<string>(""),
  faviourite: new FormControl<boolean>(false)
})


onformSubmit(){
 const addcontactRequest = {
name: this.contactform.value.name,
email: this.contactform.value.email,
phoneNumber: this.contactform.value.phoneNumber,
favorite: this.contactform.value.faviourite
 }

 this.httpClient.post("https://localhost:7264/api/Contact",addcontactRequest, { responseType: 'text' })
 .subscribe({
  next:(value) => {
    console.log(value)
    this.getdata();
    this.contactform.reset();
  }
 })

}

  constructor(private httpClient: HttpClient) { 
    this.getdata();
  }
  contact:any[];

  private getdata() {
    this.httpClient.get<Contact[]>("https://localhost:7264/api/Contact").subscribe(response => {
      this.contact=response;
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    })
  }
}

