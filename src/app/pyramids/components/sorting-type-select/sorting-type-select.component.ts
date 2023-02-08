import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getPyramidSortingTypes, PyramidSortingType } from '../../types/pyramid-sorting.type';

@Component({
	selector: 'app-sorting-type-select',
	templateUrl: './sorting-type-select.component.html',
	styleUrls: ['./sorting-type-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingTypeSelectComponent {
	@Input() sortingType: PyramidSortingType = 'Price Ascending';
	@Output() valueChange = new EventEmitter<PyramidSortingType>();

	PyramidSortingType = getPyramidSortingTypes();

	onSortingTypeChange(newSortingType: PyramidSortingType): void {
		this.valueChange.emit(newSortingType);
	}
}
