import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsContainerComponent } from './pyramids-container.component';

describe('PyramidsContainerComponent', () => {
  let component: PyramidsContainerComponent;
  let fixture: ComponentFixture<PyramidsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
