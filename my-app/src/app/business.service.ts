import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/business';
  constructor() { }
  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
