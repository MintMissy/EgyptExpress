import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PyramidSortingType } from '../../types/pyramid-sorting.type';
import PyramidsContainerPresenter from './pyramids-container.presenter';

@Component({
	selector: 'app-pyramids-container',
	templateUrl: './pyramids-container.component.html',
	styleUrls: ['./pyramids-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PyramidsContainerPresenter],
})
export class PyramidsContainerComponent implements OnInit, OnDestroy {
	sortingType$ = this.pyramidsPresenter.sortingType$.asObservable();
	pyramidsData$ = this.pyramidsPresenter.pyramidsData$.asObservable();

	constructor(private readonly pyramidsPresenter: PyramidsContainerPresenter) {}

	ngOnInit(): void {
		this.pyramidsPresenter.loadPyramidsData();
	}

	ngOnDestroy(): void {
		this.pyramidsPresenter.destroy();
	}

	onSortingTypeChange(sortingType: PyramidSortingType) {
		this.pyramidsPresenter.updateSortingType(sortingType);
	}
}
