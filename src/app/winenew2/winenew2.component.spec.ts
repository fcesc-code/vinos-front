import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { Winenew2Component } from './winenew2.component';

describe('WinenewComponent', () => {
  let component: Winenew2Component;
  let fixture: ComponentFixture<Winenew2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ FormBuilder, HttpClient, HttpHandler ],
      declarations: [ Winenew2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Winenew2Component);
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
