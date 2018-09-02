import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestCasesComponent,
    HomeComponent,
    TestSuitesComponent,
    TestPlansComponent,
    RegressionCyclesComponent,
    TestCaseComponent,
    NewTestCaseComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
