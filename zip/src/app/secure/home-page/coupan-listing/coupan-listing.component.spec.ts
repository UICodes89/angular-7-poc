import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupanListingComponent } from './coupan-listing.component';

describe('CoupanListingComponent', () => {
  let component: CoupanListingComponent;
  let fixture: ComponentFixture<CoupanListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupanListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupanListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
