import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export enum PyramidSortingType {
	PRICE_ASCENDING = 'Price Ascending',
	PRICE_DESCENDING = 'Price Descending',
	VOLUME_ASCENDING = 'Volume Ascending',
	VOLUME_DESCENDING = 'Volume Descending',
	HEIGHT_ASCENDING = 'Height Ascending',
	HEIGHT_DESCENDING = 'Height Descending',
}

@Component({
	selector: 'app-sorting-type-select',
	templateUrl: './sorting-type-select.component.html',
	styleUrls: ['./sorting-type-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingTypeSelectComponent {
  @Input() sortingType = PyramidSortingType.PRICE_ASCENDING;
	@Output() valueChange = new EventEmitter<PyramidSortingType>();

	PyramidSortingType = PyramidSortingType;

	onSortingTypeChange(newSortingType: PyramidSortingType): void {
    this.valueChange.emit(newSortingType);
	}
}
