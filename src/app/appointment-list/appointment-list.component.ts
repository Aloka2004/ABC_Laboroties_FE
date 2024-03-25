import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAppointments();
  }

  private getAppointments() {
    this.appointmentService.getAppointmentslist().subscribe(data => {this.appointments = data;
      });
  }

  deleteAppointment(id: number){ 
    this.appointmentService.deleteAppointment(id).subscribe( data => { 
      console.log(data);
      this.getAppointments();
    })
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
        pdf.save('AppointmentList.pdf'); // Generated PDF
      });
           console.error('Element not found!');
    } else {
      console.error('Element not found!');
    }
  }
  

}
