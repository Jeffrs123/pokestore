import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeShopComponent } from './resume-shop.component';

describe('ResumeShopComponent', () => {
  let component: ResumeShopComponent;
  let fixture: ComponentFixture<ResumeShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
