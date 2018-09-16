import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestCase } from '../models/test-case.model';
import { Observable } from 'rxjs';
import { cloneWithoutKeys } from '../../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TestCasesService {
  private url = '/api/test-cases';

  constructor(
    private http: HttpClient
  ) { }

  getTestCases(): Observable<TestCase[]> {
    return this.http.get<TestCase[]>(this.url);
  }

  insertTestCase(testCase: any): Observable<any> {
    const payload = this.stripPayload(testCase);
    return this.http.post<any>(this.url, payload);
  }

  updateTestCase(testCase: TestCase): Observable<any> {
    const payload = this.stripPayload(testCase);
    return this.http.put<any>(`${this.url}/${testCase.id}`, payload);
  }

  private stripPayload(testCase: TestCase): any {
    return cloneWithoutKeys(testCase, ['id']);
  }
}
