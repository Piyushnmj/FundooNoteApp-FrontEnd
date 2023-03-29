import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TakeNotesComponent } from './Component/take-notes/take-notes.component';
import { MatListModule } from '@angular/material/list';
import { AuthguardserviceService } from './Services/authservice/authguardservice.service';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';
import { NotesContainerComponent } from './Component/notes-container/notes-container.component';
import { IconsComponent } from './Component/icons/icons.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { UpdateNotesComponent } from './Component/update-notes/update-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TrashNotesComponent } from './Component/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Component/archive-notes/archive-notes.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DemoReviewComponent } from './Component/demo-review/demo-review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    TakeNotesComponent,
    DisplayNotesComponent,
    NotesContainerComponent,
    IconsComponent,
    UpdateNotesComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    FilterPipe,
    DemoReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [AuthguardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
