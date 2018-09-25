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

  logFileInfo(file: File) {
    console.log(file);
  }

  uploadFile(file: File) {
    this.attachmentsService.uploadAttachmentsForTestCase(this.testCaseId, file)
      .then(() => {
        this.loadAttachments();
      })
      .catch(console.error);
  }
}
