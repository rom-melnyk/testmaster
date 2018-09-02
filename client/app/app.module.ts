import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestCasesComponent } from './components/views/test-cases/test-cases.component';
import { HomeComponent } from './components/views/home/home.component';
import { TestSuitesComponent } from './components/views/test-suites/test-suites.component';
import { TestPlansComponent } from './components/views/test-plans/test-plans.component';
import { RegressionCyclesComponent } from './components/views/regression-cycles/regression-cycles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestCasesComponent,
    HomeComponent,
    TestSuitesComponent,
    TestPlansComponent,
    RegressionCyclesComponent
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
