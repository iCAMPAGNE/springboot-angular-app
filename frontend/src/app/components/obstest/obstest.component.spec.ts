import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';

import { ObstestComponent } from './obstest.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { provideMockStore } from '@ngrx/store/testing';
import {ReactiveComponentModule} from "@ngrx/component";

fdescribe('ObstestComponent', () => {
    let component: ObstestComponent;
    let fixture: ComponentFixture<ObstestComponent>;

    beforeEach(async () => {
        const initialState = { };
        await TestBed.configureTestingModule({
            declarations: [ ObstestComponent ],
            imports: [
                ReactiveComponentModule
            ],
            providers: [
                provideMockStore({ initialState })
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ObstestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() => {
        expect(component).toBeTruthy();
        fixture.detectChanges();

        expect(component.naam).toEqual('Joke');
        const naamEl = fixture.debugElement.nativeElement.querySelector('.naam');
        expect(component.naam).toEqual(naamEl.textContent);

        // component.things$.subscribe(things => {
        //     fixture.detectChanges();
        //   console.log('things = ' + things);

        const thingsElement = fixture.debugElement.nativeElement.querySelector('.things');
        console.log("thingsElement = ", thingsElement);
        console.log('container', fixture.debugElement.nativeElement.querySelector('.container').innerText);
//    });

        // console.log('Going to call ngOnInit');
        // component.ngOnInit();
        //   console.log('Did call ngOnInit');

        // const thingElements = fixture.debugElement.queryAll(By.css('.things'));
        // expect(thingElements[0].nativeElement.textContent).toEqual('Ikke');
        //   expect(thingElements[1].nativeElement.textContent).toEqual('Me');
    }));
});
