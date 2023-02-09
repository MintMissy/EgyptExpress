import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { PyramidsService } from '../../services/pyramids.service';
import { PyramidData } from '../../types/pyramid-data.type';
import { applyPyramidTypeSorting, PyramidSortingType } from '../../types/pyramid-sorting.type';

@Injectable()
export default class PyramidsContainerPresenter {
	sortingType$ = new BehaviorSubject<PyramidSortingType>('Height Descending');
	pyramidsData$ = new BehaviorSubject<PyramidData[] | null>(null);

	destroy$ = new Subject<void>();

	constructor(private readonly pyramidsService: PyramidsService) {}

	loadPyramidsData() {
		this.pyramidsService
			.getPyramidsData()
			.pipe(
				takeUntil(this.destroy$),
				map((pyramidsData) => applyPyramidTypeSorting(pyramidsData, this.sortingType$.value))
			)
			.subscribe((pyramidsData) => {
				this.pyramidsData$.next(pyramidsData);
			});
	}

	updateSortingType(sortingType: PyramidSortingType) {
		this.sortingType$.next(sortingType);
		if (this.pyramidsData$.value !== null) {
			this.pyramidsData$.next(applyPyramidTypeSorting(this.pyramidsData$.value, this.sortingType$.value));
		}
	}

	destroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
