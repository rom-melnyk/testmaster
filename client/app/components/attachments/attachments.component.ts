import { Component, OnInit, Input } from '@angular/core';
import { AttachmentsService } from '../../services/attachments.service';

interface Attachment {
  name: string;
  type: 'text' | 'image' | 'other';
  date: string;
}

@Component({
  selector: 'tm-attachments',
  templateUrl: './attachments.component.html',
  styles: [
    '.name { display: block; }',
  ]
})
export class AttachmentsComponent implements OnInit {
  @Input() private testCaseId: number;
  public attachments: Attachment[] = [];

  constructor(
    private attachmentsService: AttachmentsService,
  ) { }

  ngOnInit() {
    this.attachmentsService.getAttachmentsForTestCase(this.testCaseId)
      .then((attachments) => {
        this.attachments = attachments.map(({ name, date, }) => {
          const type: Attachment['type'] = ['jpg', 'gif', 'png'].includes(name.slice(-3).toLowerCase())
            ? 'image' : 'other';
          return { name, type, date };
        });
      })
      .catch(console.error);
  }

  deleteAttachment(attachment) {
    console.log(`delete ${attachment.name}`);
  }

  copyAttachmentPath(attachment) {
    console.log(`copy the path of ${attachment.name}`);
  }
}
