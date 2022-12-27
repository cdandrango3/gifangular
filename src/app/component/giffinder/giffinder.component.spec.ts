import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiffinderComponent } from './giffinder.component';

describe('GiffinderComponent', () => {
  let component: GiffinderComponent;
  let fixture: ComponentFixture<GiffinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiffinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiffinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
