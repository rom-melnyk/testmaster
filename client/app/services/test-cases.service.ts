import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestCase } from '../models/test-case.model';
import { cloneWithoutKeys } from '../../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TestCasesService {
  private url = '/api/test-cases';

  constructor(
    private http: HttpClient
  ) { }

  getTestCases(): Promise<TestCase[]> {
    return this.http.get<TestCase[]>(this.url).toPromise();
  }

  insertTestCase(testCase: any): Promise<any> {
    const payload = this.stripPayload(testCase);
    return this.http.post<any>(this.url, payload).toPromise();
  }

  updateTestCase(testCase: TestCase): Promise<any> {
    const payload = this.stripPayload(testCase);
    return this.http.put<any>(`${this.url}/${testCase.id}`, payload).toPromise();
  }

  private stripPayload(testCase: TestCase): any {
    return cloneWithoutKeys(testCase, ['id']);
  }
}
