import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PyramidSortingType } from '../../components/sorting-type-select/sorting-type-select.component';
import { PyramidsService } from '../../services/pyramids.service';
import { PyramidData } from '../../types/pyramid-data.type';

@Component({
	selector: 'app-pyramids-container',
	templateUrl: './pyramids-container.component.html',
	styleUrls: ['./pyramids-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyramidsContainerComponent implements OnInit {
	sortingType = PyramidSortingType.HEIGHT_ASCENDING;
	pyramidsData$?: Observable<PyramidData[]>;

	constructor(private readonly pyramidsService: PyramidsService) {}

	ngOnInit(): void {
		this.pyramidsData$ = this.pyramidsService.getPyramidsData();
	}

	onSortingTypeChange(sortingType: PyramidSortingType) {
		this.sortingType = sortingType;
	}
}
