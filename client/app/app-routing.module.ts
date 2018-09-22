import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paths } from '../../shared/constants';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AllTestCasesComponent } from './components/test-cases/all/all-test-cases.component';
import { OneTestCaseComponent } from './components/test-cases/one/one-test-case.component';
import { EditTestCaseComponent } from './components/test-cases/edit/edit-test-case.component';
import { AllTestSuitesComponent } from './components/test-suites/all/all-test-suites.component';
import { AllTestPlansComponent } from './components/test-plans/all/all-test-plans.component';
import { AllRegressionCyclesComponent } from './components/regression-cycles/all/all-regression-cycles.component';

const routes: Routes = [
  { path: Paths.HOME, component: HomeComponent },

  { path: Paths.TestCases.ALL, component: AllTestCasesComponent },
  { path: Paths.TestCases.EDIT, component: EditTestCaseComponent },
  { path: Paths.TestCases.ONE, component: OneTestCaseComponent },

  { path: Paths.TestSuites.ALL, component: AllTestSuitesComponent },
  { path: Paths.TestSuites.EDIT, component: AllTestSuitesComponent },
  { path: Paths.TestSuites.ONE, component: AllTestSuitesComponent },

  // { path: Paths.TestPlans.ALL, component: AllTestPlansComponent },
  // { path: Paths.TestPlans.NEW, component: AllTestPlansComponent },
  // { path: Paths.TestPlans.ONE, component: AllTestPlansComponent },

  // { path: Paths.RegressionCycles.ALL, component: AllRegressionCyclesComponent },
  // { path: Paths.RegressionCycles.NEW, component: AllRegressionCyclesComponent },
  // { path: Paths.RegressionCycles.ONE, component: AllRegressionCyclesComponent },

  { path: Paths.NOT_FOUND, component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
