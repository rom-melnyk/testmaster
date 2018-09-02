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
    // return this.http.get<Hero[]>(this.url);
    return of([
      { id: 1, title: 'A pretty bug', description: 'Some pretty descr' },
      { id: 2, title: 'Another pretty bug', description: 'Another pretty descr' },
      { id: 3, title: 'An ugly bug', description: 'Some ugly descr' },
      { id: 4, title: 'A nice bug', description: 'Some nide descr' },
    ]);
  }
}
