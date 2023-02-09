import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsListComponent } from './pyramids-list.component';

describe('PyramidsListComponent', () => {
  let component: PyramidsListComponent;
  let fixture: ComponentFixture<PyramidsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
