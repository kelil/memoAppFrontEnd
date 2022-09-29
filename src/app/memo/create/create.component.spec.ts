import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoCreateComponent } from './create.component';

describe('MemoComponent', () => {
  let component: MemoCreateComponent;
  let fixture: ComponentFixture<MemoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
