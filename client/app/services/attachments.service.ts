import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export interface UploadResults {
  uploaded: string[];
  failed: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {
  private static readonly IMAGE_TYPES = [ '.jpg', '.jpeg', '.gif', '.png', '.bmp', '.svg' ];

  public static readonly URL = '/api/attachments';

  static copyAttachmentPath(inputEl: HTMLInputElement, name: string): void {
    inputEl.value = `${AttachmentsService.URL}/${name}`;
    inputEl.removeAttribute('disabled');
    inputEl.select();
    document.execCommand('copy');
    inputEl.blur();
    inputEl.setAttribute('disabled', 'true');
  }

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  getBackgroundImage(name: string): SafeStyle {
    const dotPosition = name.lastIndexOf('.');
    const ext = name.slice(dotPosition).toLowerCase();
    const url = AttachmentsService.IMAGE_TYPES.includes(ext)
      ? `${AttachmentsService.URL}/${name}`
      : '/assets/gfx/attachment.svg';
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  uploadAttachmentsForTestCase(files: FileList): Promise<UploadResults> {
    const body = new FormData();
    Array.prototype.forEach.call(files, (file, i) => {
      body.append(i, file, file.name);
    });
    return this.http.post(AttachmentsService.URL, body)
      .toPromise()
      .then((result: UploadResults): UploadResults | Promise<any> => {
        if (!result.uploaded || !result.failed) {
          return Promise.reject(result);
        }
        result.failed.forEach((name) => {
          console.warn(`"${name}" was not uploaded`);
        });
        return result;
      });
  }

  deleteAttachment(filename: string): Promise<boolean> {
    return this.http.delete(`${AttachmentsService.URL}/${filename}`)
      .toPromise()
      .then((result: { deleted: number }) => {
        if (!result.deleted) {
          console.warn(`"${filename}" was not deleted`);
        }
        return !!result.deleted;
      });
  }
}
