import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../index';

describe('Pipe: keys', () => {

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AlainThemeModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('should return a array', () => {
        const ul = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLUListElement).querySelectorAll('li');
        expect(ul.length).toBe(2);
        expect(ul[0].textContent).toBe('name');
        expect(ul[1].textContent).toBe('address');
    });

});

@Component({
    template: `
    <ul id="result">
        <li *ngFor="let item of data | keys">{{item.key}}</li>
    </ul>
    `
})
class TestComponent {
    data: any = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
}
