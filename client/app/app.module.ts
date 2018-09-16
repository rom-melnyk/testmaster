import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { TestCasesComponent } from './components/test-cases/test-cases.component';
import { HomeComponent } from './components/home/home.component';
import { TestSuitesComponent } from './components/test-suites/test-suites.component';
import { TestPlansComponent } from './components/test-plans/test-plans.component';
import { RegressionCyclesComponent } from './components/regression-cycles/regression-cycles.component';
import { TestCaseComponent } from './components/test-case/test-case.component';
import { NewTestCaseComponent } from './components/new-test-case/new-test-case.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FormComponent } from './components/forms/form-builder/form.component';
import { StringInputComponent } from './components/forms/string-input/string-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    TestCasesComponent,
    HomeComponent,
    NotFoundComponent,
    TestSuitesComponent,
    TestPlansComponent,
    RegressionCyclesComponent,
    TestCaseComponent,
    NewTestCaseComponent,

    FormComponent,
    StringInputComponent,
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
