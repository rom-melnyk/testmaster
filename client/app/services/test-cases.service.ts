import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestCase } from '../models/test-case.model';
import { Observable, of } from 'rxjs';

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
}
