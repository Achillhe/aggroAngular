import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteServiceComponent } from './site-service.component';

describe('SiteServiceComponent', () => {
  let component: SiteServiceComponent;
  let fixture: ComponentFixture<SiteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
