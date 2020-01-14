import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDesignsComponent } from './featured-designs.component';

describe('FeaturedDesignsComponent', () => {
  let component: FeaturedDesignsComponent;
  let fixture: ComponentFixture<FeaturedDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
