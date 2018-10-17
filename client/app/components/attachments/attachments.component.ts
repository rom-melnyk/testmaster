import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttachmentsService, UploadResults } from '../../services/attachments.service';

@Component({
  selector: 'tm-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: [ './attachments.component.scss', ]
})
export class AttachmentsComponent implements OnInit {
  @Input() mode: 'view' | 'edit' = 'view';
  @Input() attachments: string[] = [];
  @Output() updated = new EventEmitter<string[]>();

  public uploadFieldLabel: string;

  constructor(
    private attachmentsService: AttachmentsService,
  ) { }

  ngOnInit() {
  }

  updateUploadLabel(files: FileList | undefined[]) {
    this.uploadFieldLabel = Array.prototype.map.call(files, ({ name }) => name).join('; ');
  }

  uploadFile(fileInput: HTMLInputElement) {
    this.attachmentsService.uploadAttachmentsForTestCase(fileInput.files)
      .then((result: UploadResults) => {
        this.attachments = [ ...this.attachments, ...result.uploaded ];
        this.updated.emit(this.attachments);
        fileInput.value = null;
        this.updateUploadLabel([]);
      })
      .catch(console.error);
  }

  deleteAttachment(deleted: string) {
    this.attachments = this.attachments.filter(name => name !== deleted);
    this.updated.emit(this.attachments);
  }
}
