import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttachmentModel } from '../models/attachment.model';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {
  private static getUrl(testCaseId: number) {
    return `/api/test-cases/${testCaseId}/attachments`;
  }
  private static get IMAGE_TYPES() {
    return [ '.jpg', '.jpeg', '.gif', '.png', '.bmp', '.svg' ];
  }

  static copyAttachmentPath(inputEl: HTMLInputElement, value: string): void {
    inputEl.value = value;
    inputEl.removeAttribute('disabled');
    inputEl.select();
    document.execCommand('copy');
    inputEl.blur();
    inputEl.setAttribute('disabled', 'true');
  }

  constructor(
    private http: HttpClient,
  ) { }

  getAttachmentsForTestCase(testCaseId: number): Promise<AttachmentModel[]> {
    const url = AttachmentsService.getUrl(testCaseId);
    return (this.http.get(url).toPromise() as Promise<AttachmentModel[]>)
      .then((attachments) => {
        return attachments.map(({ name, date, }) => {
          const ext = name.slice(-4).toLowerCase();
          const type: AttachmentModel['type'] = AttachmentsService.IMAGE_TYPES.includes(ext)
            ? 'image' : 'other';
          date = date.slice(0, -8).replace('T', ' ');
          return {name, type, date};
        });
      });
  }

  uploadAttachmentsForTestCase(testCaseId: number, files: FileList): Promise<Array<any>> {
    const url = AttachmentsService.getUrl(testCaseId);
    const body = new FormData();
    Array.prototype.forEach.call(files, (file, i) => {
      body.append(i, file, file.name);
    });
    return this.http.post(url, body).toPromise() as Promise<Array<any>>;
  }

  deleteAttachment(filename: string): Promise<any> {
    return this.http.delete(`/attachments/${filename}`).toPromise();
  }
}
