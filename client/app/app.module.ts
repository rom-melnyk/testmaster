import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AllTestCasesComponent } from './components/test-cases/all/all-test-cases.component';
import { HomeComponent } from './components/home/home.component';
import { AllTestSuitesComponent } from './components/test-suites/all/all-test-suites.component';
import { AllTestPlansComponent } from './components/test-plans/all/all-test-plans.component';
import { AllRegressionCyclesComponent } from './components/regression-cycles/all/all-regression-cycles.component';
import { OneTestCaseComponent } from './components/test-cases/one/one-test-case.component';
import { EditTestCaseComponent } from './components/test-cases/edit/edit-test-case.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FormComponent } from './components/forms/form-builder/form.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { AttachmentCardComponent } from './components/attachments/attachment-card/attachment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    AllTestCasesComponent,
    HomeComponent,
    NotFoundComponent,
    AllTestSuitesComponent,
    AllTestPlansComponent,
    AllRegressionCyclesComponent,
    OneTestCaseComponent,
    EditTestCaseComponent,

    FormComponent,
    AttachmentsComponent,
    AttachmentCardComponent,
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
