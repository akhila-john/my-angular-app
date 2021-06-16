import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { FeeDetailsComponent} from './fee-details/fee-details.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminComponent } from './admin/admin.component';
 import { CoursesComponent } from './courses/courses.component';
 import { GalleryComponent } from './gallery/gallery.component';
 import { StudentNewComponent } from './student-new/student-new.component';
 import { TableReuseComponent } from './table-reuse/table-reuse.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'student',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'batch-details',component:BatchDetailsComponent},
  {path: 'fee-details',component:FeeDetailsComponent},
  {path: 'emergency-contact',component:EmergencyContactComponent},
  {path: 'viewdetails/:student_id',component:ViewdetailsComponent,canActivate:[AuthGuard]},
  {path: 'editdetails/:student_id',component:EditdetailsComponent},
  {path: 'addstudent',component:AddstudentComponent,canActivate:[AuthGuard]},
     {path: '',component: LoginComponent},
     {path: 'login',component: LoginComponent},
  //  {path: '',redirectTo:'/home',pathMatch:'full'},
   //{path:'loginsuccess',component:LoginsuccessComponent},
  {path: 'admin',component: AdminComponent},
  {path:'courses',component:CoursesComponent},
  {path:'gallery',component:GalleryComponent },
  {path:'student-new',component: StudentNewComponent},
  {path:'table-reuse',component: TableReuseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
