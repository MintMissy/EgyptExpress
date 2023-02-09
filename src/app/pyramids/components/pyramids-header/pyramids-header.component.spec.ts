import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsHeaderComponent } from './pyramids-header.component';

describe('PyramidsHeaderComponent', () => {
	let component: PyramidsHeaderComponent;
	let fixture: ComponentFixture<PyramidsHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PyramidsHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PyramidsHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
