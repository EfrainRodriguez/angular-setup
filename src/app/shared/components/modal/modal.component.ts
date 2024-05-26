import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgTemplateOutlet],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() contentTemplate: any;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  close() {
    this.onClose.emit();
  }
}
