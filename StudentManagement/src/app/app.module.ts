import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService} from './user-service.service';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { ModalcomponentComponent } from './modalcomponent/modalcomponent.component';
import { AuthService } from './auth.service';
import { PaginationComponent } from './pagination/pagination.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { PaginationNewComponent } from './pagination-new/pagination-new.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { TableComponent } from './table/table.component';
import { TableReuseComponent } from './table-reuse/table-reuse.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    
    FeeDetailsComponent,
    EmergencyContactComponent,
    BatchDetailsComponent,
    MenuComponent,
    ViewdetailsComponent,
    EditdetailsComponent,
    AddstudentComponent,
    LoginComponent,
    LoginsuccessComponent,
    AdminComponent,
    ModalcomponentComponent,
    PaginationComponent,
    CoursesComponent,
    GalleryComponent,
    PaginationNewComponent,
    StudentNewComponent,
    TableComponent,
    TableReuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,NgxPaginationModule,
    NgbModule,NgbDropdownModule,Ng2SearchPipeModule, 
  ],
  providers: [UserServiceService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
