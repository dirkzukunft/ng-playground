import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputDecoratorComponent } from './test-input-decorator.component';

describe('TestInputDecoratorComponent', () => {
  let component: TestInputDecoratorComponent;
  let fixture: ComponentFixture<TestInputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInputDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
