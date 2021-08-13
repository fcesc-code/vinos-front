import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WineitemComponent } from './wineitem.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WineitemComponent', () => {
  let component: WineitemComponent;
  let fixture: ComponentFixture<WineitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineitemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create wineitemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render wine__card', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.wine__card')).toBeTruthy();
  });
});
