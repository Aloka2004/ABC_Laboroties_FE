import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatloginComponent } from './patientLogin/patientLogin.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { PatientdashComponent } from './patdash/patientdash.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { AuthenticationService } from './authentication.service';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { PaymentsComponent } from './payments/payments.component';
import { NgxStripeModule } from 'ngx-stripe';


const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'adlogin', component:  PatloginComponent},
  { path: 'patlogin', component:  AdminloginComponent },
  { path: 'home', component: NewsfeedComponent },
  { path: 'createpatient', component: CreatepatientComponent },
  { path: 'docdash', component: DocdashComponent },
  { path: 'updatepatient/:id', component: UpdatePatientComponent, },
  { path: 'admindash', component: AdmindashComponent },
  { path: 'patdash', component: PatientdashComponent },
  { path: 'medicinelist', component: MedicineListComponent },
  { path: 'createmedicine', component: CreatemedicineComponent },
  { path: 'updatemedicine/:id', component: UpdateMedicineComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'createappointment', component: CreateAppointmentComponent },
  { path: 'viewpatient/:id', component: ViewPatientComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    DocloginComponent,
    AdminloginComponent,
    PatloginComponent,
    DocdashComponent,
    AdmindashComponent,
    PatientdashComponent,
    CreatepatientComponent,
    UpdatePatientComponent,
    MedicineListComponent,
    CreatemedicineComponent,
    UpdateMedicineComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    ViewPatientComponent,
    PaymentsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51OucOgBoaqreuNETZii1F9MkDkR5wckNFigkYdmIvVflw23JL3qgVvbLGzPXCHVmGqO26pKNzKwpIl2Y1uLGChyn00pUbVWe2g'),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
