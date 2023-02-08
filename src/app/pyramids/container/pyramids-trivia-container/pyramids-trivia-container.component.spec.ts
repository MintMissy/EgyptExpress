import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsTriviaContainerComponent } from './pyramids-trivia-container.component';

describe('PyramidsTriviaContainerComponent', () => {
  let component: PyramidsTriviaContainerComponent;
  let fixture: ComponentFixture<PyramidsTriviaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidsTriviaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidsTriviaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
