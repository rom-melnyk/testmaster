import { Component, OnInit, Input } from '@angular/core';
import { AttachmentsService } from '../../services/attachments.service';
import { AttachmentModel } from '../../models/attachment.model';

@Component({
  selector: 'tm-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: [ './attachments.component.scss', ]
})
export class AttachmentsComponent implements OnInit {
  @Input() private testCaseId: number;
  public attachments: AttachmentModel[] = [];
  public uploadFieldLabel: string;

  constructor(
    private attachmentsService: AttachmentsService,
  ) { }

  ngOnInit() {
    this.loadAttachments();
  }

  loadAttachments() {
    this.attachmentsService.getAttachmentsForTestCase(this.testCaseId)
      .then((attachments) => {
        this.attachments = attachments;
      })
      .catch(console.error);
  }

  updateUploadLabel(files: FileList | undefined[]) {
    this.uploadFieldLabel = Array.prototype.map.call(files, ({ name }) => name).join('; ');
  }

  uploadFile(fileInput: HTMLInputElement) {
    this.attachmentsService.uploadAttachmentsForTestCase(this.testCaseId, fileInput.files)
      .then(() => {
        this.loadAttachments();
        fileInput.value = null;
        this.updateUploadLabel([]);
      })
      .catch(console.error);
  }
}
