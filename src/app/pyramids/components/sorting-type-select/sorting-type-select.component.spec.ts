import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingTypeSelectComponent } from './sorting-type-select.component';

describe('SortingTypeSelectComponent', () => {
  let component: SortingTypeSelectComponent;
  let fixture: ComponentFixture<SortingTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingTypeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
