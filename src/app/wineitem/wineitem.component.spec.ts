import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineitemComponent } from './wineitem.component';

describe('WineitemComponent', () => {
  let component: WineitemComponent;
  let fixture: ComponentFixture<WineitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
