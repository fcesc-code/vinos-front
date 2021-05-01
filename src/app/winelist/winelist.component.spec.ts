import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinelistComponent } from './winelist.component';

describe('WinelistComponent', () => {
  let component: WinelistComponent;
  let fixture: ComponentFixture<WinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
