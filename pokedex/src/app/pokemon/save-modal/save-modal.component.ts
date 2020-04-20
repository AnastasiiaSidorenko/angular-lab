import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss']
})
export class SaveModalComponent implements OnInit {
  @Input() id: number;

  constructor(
    private router: Router,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void { }

  confirm(): void {
    this.modalRef.hide();
    this.router.navigate([`pokemons/${this.id}`]);
  }
}
