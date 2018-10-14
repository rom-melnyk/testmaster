import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AttachmentModel } from '../../../models/attachment.model';
import { AttachmentsService } from '../../../services/attachments.service';
import { wait } from '../../../../../shared/utils';

@Component({
  selector: 'tm-attachment-card',
  templateUrl: './attachments-card.component.html',
  styleUrls: [ './attachments-card.component.scss' ]
})
export class AttachmentCardComponent implements OnInit {
  @Input() mode: 'view' | 'edit' = 'view';
  @Input() attachment: AttachmentModel;
  @Output() deleted = new EventEmitter<string>();
  public isCopyMode: false;
  private inputEl: HTMLInputElement;

  constructor(
    private attachmentsService: AttachmentsService,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.inputEl = this.el.nativeElement.querySelector('input');
  }

  setCopyMode(mode) {
    this.isCopyMode = mode;
    if (mode) {
      wait(100) // wail till DOM get updated
        .then(() => {
          AttachmentsService.copyAttachmentPath(this.inputEl, '/attachments/' + this.attachment.name);
        })
        .catch(console.log);
    }
  }

  deleteAttachment() {
    if (confirm(`Sure to delete the "${this.attachment.name}"?`)) {
      this.attachmentsService.deleteAttachment(this.attachment.name)
        .then(() => {
          this.deleted.emit(this.attachment.name);
        })
        .catch(console.error);
    }
  }
}
