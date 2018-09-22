import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestCaseModel } from '../models/test-case.model';
import { cloneWithoutKeys } from '../../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TestCasesService {
  private url = '/api/test-cases';

  private static stripPayload(testCase: TestCaseModel): any {
    return cloneWithoutKeys(testCase, ['id']);
  }

  constructor(
    private http: HttpClient
  ) { }

  getTestCases(): Promise<TestCaseModel[]> {
    return this.http
      .get<TestCaseModel[]>(this.url)
      .toPromise();
  }

  getTestCase(id: number): Promise<TestCaseModel> {
    return this.http
      .get<TestCaseModel>(`${this.url}/${id}`)
      .toPromise();
  }

  createTestCase(testCase: any): Promise<TestCaseModel> {
    const payload = TestCasesService.stripPayload(testCase);
    return this.http
      .post<TestCaseModel>(this.url, payload)
      .toPromise();
  }

  updateTestCase(testCase: TestCaseModel): Promise<{ updated: number }> {
    const payload = TestCasesService.stripPayload(testCase);
    return this.http
      .put<{ updated: number }>(`${this.url}/${testCase.id}`, payload)
      .toPromise();
  }

  deleteTestCase(id: number): Promise<{ deleted: number }> {
    return this.http
      .delete<{ deleted: number }>(`${this.url}/${id}`)
      .toPromise();
  }
}
