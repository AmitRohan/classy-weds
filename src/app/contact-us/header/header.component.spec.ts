import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHeaderComponent } from './header.component';

describe('ContactUsHeaderComponent', () => {
  let component: ContactUsHeaderComponent;
  let fixture: ComponentFixture<ContactUsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
