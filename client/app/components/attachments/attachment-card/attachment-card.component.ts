import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AttachmentModel } from '../../../models/attachment.model';
import { AttachmentsService } from '../../../services/attachments.service';

@Component({
  selector: 'tm-attachment-card',
  templateUrl: './attachments-card.component.html',
  styleUrls: [ './attachments-card.component.scss' ]
})
export class AttachmentCardComponent implements OnInit {
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
      // wail till DOM get updated
      setTimeout(() => {
        AttachmentsService.copyAttachmentPath(this.inputEl, this.attachment.name);
      }, 100);
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
