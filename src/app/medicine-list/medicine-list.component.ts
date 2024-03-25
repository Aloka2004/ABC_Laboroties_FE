import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: Medicine[];

  constructor(private medicineService: MedicineService,
    private router: Router) { }

  ngOnInit(): void {

    this.getMedicines();

  }

  private getMedicines(){
    this.medicineService.getMedicinesList().subscribe(data => {this.medicines = data;
    });

}

updateMedicine(id: number){

  this.router.navigate(['updatemedicine', id]);

}

deleteMedicine(id: number){
  this.medicineService.deleteMedicine(id).subscribe( data => { 
    console.log(data);
    this.getMedicines();
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
      pdf.save('MedicineList.pdf'); // Generated PDF
    });
         console.error('Element not found!');
  } else {
    console.error('Element not found!');
  }
}
}
