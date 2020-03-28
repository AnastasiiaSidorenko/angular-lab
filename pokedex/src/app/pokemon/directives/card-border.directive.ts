import { Directive, ElementRef, Renderer2, AfterContentInit, Input } from '@angular/core';

@Directive({
    selector: '[red-bold]'
})
export class RedBoldDirective implements AfterContentInit {
    @Input('red-bold') damage: number;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    public ngAfterContentInit(): void {
        if (this.damage > 50) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'border', '10px solid red');
        }
    }
}