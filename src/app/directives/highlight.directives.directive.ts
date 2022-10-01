import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirective implements OnInit {
  @Input() highlightDirective = 'yellow';
  @Input() leaveElement = 'transparent';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
