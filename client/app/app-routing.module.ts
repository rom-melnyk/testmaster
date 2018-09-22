import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paths } from '../../shared/constants';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AllTestCasesComponent } from './components/test-cases/all/all-test-cases.component';
import { OneTestCaseComponent } from './components/test-cases/one/one-test-case.component';
import { EditTestCaseComponent } from './components/test-cases/edit/edit-test-case.component';
import { TestSuitesComponent } from './components/test-suites/test-suites.component';
import { TestPlansComponent } from './components/test-plans/test-plans.component';
import { RegressionCyclesComponent } from './components/regression-cycles/regression-cycles.component';

const routes: Routes = [
  { path: Paths.HOME, component: HomeComponent },

  { path: Paths.TestCases.ALL, component: AllTestCasesComponent },
  { path: Paths.TestCases.EDIT, component: EditTestCaseComponent },
  { path: Paths.TestCases.ONE, component: OneTestCaseComponent },

  { path: Paths.TestSuites.ALL, component: TestSuitesComponent },
  { path: Paths.TestSuites.EDIT, component: TestSuitesComponent },
  { path: Paths.TestSuites.ONE, component: TestSuitesComponent },

  // { path: Paths.TestPlans.ALL, component: TestPlansComponent },
  // { path: Paths.TestPlans.NEW, component: TestPlansComponent },
  // { path: Paths.TestPlans.ONE, component: TestPlansComponent },

  // { path: Paths.RegressionCycles.ALL, component: RegressionCyclesComponent },
  // { path: Paths.RegressionCycles.NEW, component: RegressionCyclesComponent },
  // { path: Paths.RegressionCycles.ONE, component: RegressionCyclesComponent },

  { path: Paths.NOT_FOUND, component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
