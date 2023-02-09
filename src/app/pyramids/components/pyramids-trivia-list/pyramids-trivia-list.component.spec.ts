import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsTriviaListComponent } from './pyramids-trivia-list.component';

describe('PyramidsTriviaListComponent', () => {
	let component: PyramidsTriviaListComponent;
	let fixture: ComponentFixture<PyramidsTriviaListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PyramidsTriviaListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PyramidsTriviaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
