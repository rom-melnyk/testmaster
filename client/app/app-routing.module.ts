import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TestCasesComponent } from './components/test-cases/test-cases.component';
import { TestSuitesComponent } from './components/test-suites/test-suites.component';
import { TestPlansComponent } from './components/test-plans/test-plans.component';
import { RegressionCyclesComponent } from './components/regression-cycles/regression-cycles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-cases', component: TestCasesComponent },
  // { path: 'test-cases/:id', component: TestCaseComponent },
  // { path: 'test-cases/new', component: NewTestCaseComponent },
  { path: 'test-suites', component: TestSuitesComponent },
  { path: 'test-plans', component: TestPlansComponent },
  { path: 'regression-cycles', component: RegressionCyclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
