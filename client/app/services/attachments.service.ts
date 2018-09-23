import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {
  private static getUrl(testCaseId: number) {
    return `/api/test-cases/${testCaseId}/attachments`;
  }

  constructor(
    private http: HttpClient,
  ) { }

  getAttachmentsForTestCase(testCaseId: number): Promise<Array<any>> {
    const url = AttachmentsService.getUrl(testCaseId);
    return this.http.get(url).toPromise() as Promise<Array<any>>;
  }

  uploadAttachmentsForTestCase(testCaseId: number, file: File): Promise<Array<any>> {
    const url = AttachmentsService.getUrl(testCaseId);
    return this.http.post(url, file).toPromise() as Promise<Array<any>>;
  }

  deleteAttachment(filename: string): Promise<any> {
    return this.http.delete(`/attachments/${filename}`).toPromise();
  }
}
