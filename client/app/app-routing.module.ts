import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paths } from '../../shared/constants';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestCasesComponent } from './components/test-cases/test-cases.component';
import { TestCaseComponent } from './components/test-case/test-case.component';
import { NewTestCaseComponent } from './components/new-test-case/new-test-case.component';
import { TestSuitesComponent } from './components/test-suites/test-suites.component';
import { TestPlansComponent } from './components/test-plans/test-plans.component';
import { RegressionCyclesComponent } from './components/regression-cycles/regression-cycles.component';

const routes: Routes = [
  { path: Paths.HOME, component: HomeComponent },

  { path: Paths.TestCases.ALL, component: TestCasesComponent },
  { path: Paths.TestCases.NEW, component: NewTestCaseComponent },
  { path: Paths.TestCases.ONE, component: TestCaseComponent },

  { path: Paths.TestSuites.ALL, component: TestSuitesComponent },
  { path: Paths.TestSuites.NEW, component: TestSuitesComponent },
  { path: Paths.TestSuites.ONE, component: TestSuitesComponent },

  { path: Paths.TestPlans.ALL, component: TestPlansComponent },
  { path: Paths.TestPlans.NEW, component: TestPlansComponent },
  { path: Paths.TestPlans.ONE, component: TestPlansComponent },

  { path: Paths.RegressionCycles.ALL, component: RegressionCyclesComponent },
  { path: Paths.RegressionCycles.NEW, component: RegressionCyclesComponent },
  { path: Paths.RegressionCycles.ONE, component: RegressionCyclesComponent },

  { path: Paths.NOT_FOUND, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
