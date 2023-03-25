import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]'
})
export class TaskCompletedDirective implements OnChanges, AfterViewInit {
  @Input() appTaskCompleted = false;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    this.changeTextStyle();
  }

  ngAfterViewInit(): void {
    this.changeTextStyle();
  }

  private changeTextStyle() {
    if (this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'text-decoration', this.appTaskCompleted ? 'line-through' : 'none');
    }
  }
}
