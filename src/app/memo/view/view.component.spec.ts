import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: MemoViewComponent;
  let fixture: ComponentFixture<MemoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
