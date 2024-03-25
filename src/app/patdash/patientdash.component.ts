import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PaymentsComponent } from '../payments/payments.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pationtdash',
  templateUrl: './patientdash.component.html',
  styleUrls: ['./patientdash.component.css']
})
export class PatientdashComponent implements OnInit {

  searchText: string;
  patients: Patient[]; 
  private dialog = inject(MatDialog);

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {

    this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatientslist().subscribe(data => { this.patients = data; 
    });
  }

  updatePatient(id: number) {

    this.router.navigate(['updatepatient', id]);

  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    } ); 
  }


  public exportTableToPDF(): void {
    const data = document.getElementById('contentToConvert'); 
  
    if (data) {
      html2canvas(data).then(canvas => {
       
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
    
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm', 'a4'); 
        let position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('PatientList.pdf'); // Generated PDF
      });
           console.error('Element not found!');
    } else {
      console.error('Element not found!');
    }
  }
  

  pay(data: any) {
    const ref = this.dialog.open(PaymentsComponent, {
      width: '400px',
      data: data,
    });
  }

}
