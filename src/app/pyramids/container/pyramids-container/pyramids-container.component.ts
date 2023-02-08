import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PyramidsService } from '../../services/pyramids.service';
import { PyramidData } from '../../types/pyramid-data.type';
import { applyPyramidTypeSorting, PyramidSortingType } from '../../types/pyramid-sorting.type';

@Component({
	selector: 'app-pyramids-container',
	templateUrl: './pyramids-container.component.html',
	styleUrls: ['./pyramids-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyramidsContainerComponent implements OnInit {
	sortingType: PyramidSortingType = 'Height Descending';
	pyramidsData$?: Observable<PyramidData[]>;

	constructor(private readonly pyramidsService: PyramidsService) {}

	ngOnInit(): void {
		this.pyramidsData$ = this.pyramidsService
			.getPyramidsData()
			.pipe(map((pyramidsData) => applyPyramidTypeSorting(pyramidsData, this.sortingType)));
	}

	onSortingTypeChange(sortingType: PyramidSortingType) {
		this.sortingType = sortingType;
		this.pyramidsData$ = this.pyramidsData$?.pipe(map((pyramidsData) => applyPyramidTypeSorting(pyramidsData, this.sortingType)));
	}
}
