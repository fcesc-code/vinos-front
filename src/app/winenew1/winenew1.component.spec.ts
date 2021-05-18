import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Winenew1Component } from './winenew1.component';

describe('WinenewComponent', () => {
  let component: Winenew1Component;
  let fixture: ComponentFixture<Winenew1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Winenew1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Winenew1Component);
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
