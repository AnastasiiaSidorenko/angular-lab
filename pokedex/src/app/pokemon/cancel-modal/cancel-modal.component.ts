import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.scss']
})
export class CancelModalComponent implements OnInit {
  onClose: Subject<boolean>;

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.onClose.next(true);
    this.modalRef.hide();
  }

  decline(): void {
    this.onClose.next(false);
    this.modalRef.hide();
  }
}
