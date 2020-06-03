import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RedBoldDirective } from './card-border.directive';
import { Component } from '@angular/core';

@Component({
    template: `
    <p class="card-text" appRedBold="49">damage:49</p>
    <p class="card-text" appRedBold="51">damage:51</p>
    `
})
class TestComponent { }

describe('RedBoldDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RedBoldDirective, TestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('should render paragraph without red border if damage < 50', () => {
        const paragraph = fixture.nativeElement.querySelectorAll('p')[0];
        expect(paragraph.style.border).toBe('');
    });

    it('should render paragraph with red border if damage > 50', () => {
        const paragraph = fixture.nativeElement.querySelectorAll('p')[1];
        expect(paragraph.style.border).toBe('10px solid red');
    });
});