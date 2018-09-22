import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestCase } from '../models/test-case.model';
import { cloneWithoutKeys } from '../../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TestCasesService {
  private url = '/api/test-cases';

  private static stripPayload(testCase: TestCase): any {
    return cloneWithoutKeys(testCase, ['id']);
  }

  constructor(
    private http: HttpClient
  ) { }

  getTestCases(): Promise<TestCase[]> {
    return this.http
      .get<TestCase[]>(this.url)
      .toPromise();
  }

  getTestCase(id: number): Promise<TestCase> {
    return this.http
      .get<TestCase>(`${this.url}/${id}`)
      .toPromise();
  }

  createTestCase(testCase: any): Promise<TestCase> {
    const payload = TestCasesService.stripPayload(testCase);
    return this.http
      .post<TestCase>(this.url, payload)
      .toPromise();
  }

  updateTestCase(testCase: TestCase): Promise<{ updated: number }> {
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
