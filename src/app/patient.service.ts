import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PatientService {



  isUserLoggedIn() {
    let user = sessionStorage.getItem('username2')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username2')
  }

  
  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  getPatientslist(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/patients`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}/patients`, patient);
  }

  getPatientById(id: number): Observable<Patient> {   
    return this.httpClient.get<Patient>(`${this.baseUrl}/patients/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/patients/${id}`, patient);
  }

  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/patients/${id}`);
  }
  login(request:any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`,request);
  }

  signup(request:any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/signup`,request);
  }
  
}
