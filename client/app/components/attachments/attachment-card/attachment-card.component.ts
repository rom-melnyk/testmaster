import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AttachmentsService } from '../../../services/attachments.service';
import { wait } from '../../../../../shared/utils';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'tm-attachment-card',
  templateUrl: './attachments-card.component.html',
  styleUrls: [ './attachments-card.component.scss' ]
})
export class AttachmentCardComponent implements OnInit {
  @Input() mode: 'view' | 'edit' = 'view';
  @Input() attachment: string;
  @Output() deleted = new EventEmitter<string>();
  public url: string;
  public bgImage: SafeStyle;
  private inputEl: HTMLInputElement;

  constructor(
    private attachmentsService: AttachmentsService,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.url = `${AttachmentsService.URL}/${this.attachment}`;
    this.bgImage = this.attachmentsService.getBackgroundImage(this.attachment);
    this.inputEl = this.el.nativeElement.querySelector('input');
  }

  copyAttachmentUrl() {
    wait(100) // wail till DOM get updated
      .then(() => {
        AttachmentsService.copyAttachmentPath(this.inputEl, this.attachment);
      })
      .catch(console.error);
  }

  deleteAttachment() {
    if (confirm(`Sure to delete the "${this.attachment}"?`)) {
      this.attachmentsService.deleteAttachment(this.attachment)
        .then((result) => {
          if (result) {
            this.deleted.emit(this.attachment);
          }
        })
        .catch(console.error);
    }
  }
}
