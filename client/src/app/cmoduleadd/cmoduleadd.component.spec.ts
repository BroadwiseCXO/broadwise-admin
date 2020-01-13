import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmoduleaddComponent } from './cmoduleadd.component';

describe('CmoduleaddComponent', () => {
  let component: CmoduleaddComponent;
  let fixture: ComponentFixture<CmoduleaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmoduleaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmoduleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
