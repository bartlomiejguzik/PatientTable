import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Patient {
  code;
  name;
  lastName;
  email;
  phone;
  city;
  municipality;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<any>('assets/demo/data/patients.json')
      .toPromise()
      .then(res => <Patient[]>res.data)
      .then(data => { return data; });
    }
}