import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patlogin',
  templateUrl: './patientLogin.component.html',
  styleUrls: ['./patientLogin.component.css']
})
export class PatloginComponent implements OnInit {

  username = ''
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: PatientService) { }

  ngOnInit(): void {
  }

  checkLogin() {
 
    this.authenticate(this.username, this.password)
  }
  authenticate(username: string, password: string) {
    const request = { username, password };
    this.loginservice.login(request).subscribe(
      (result:any) => { 
        if (result.role === "Patient") {
       sessionStorage.setItem('username2', request.username)
       this.router.navigate(['appointmentlist'])
      
       this.invalidLogin = false
        }
        else{
          this.invalidLogin = true
          alert("Wrong Credentials");
          this.router.navigate(['home'])
        }
    });
   
  }

}
