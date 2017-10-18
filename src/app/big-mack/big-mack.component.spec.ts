import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMackComponent } from './big-mack.component';

describe('BigMackComponent', () => {
  let component: BigMackComponent;
  let fixture: ComponentFixture<BigMackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigMackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigMackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
