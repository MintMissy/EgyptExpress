import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PyramidSortingType } from '../../types/pyramid-sorting.type';

@Component({
  selector: 'app-pyramids-header',
  templateUrl: './pyramids-header.component.html',
  styleUrls: ['./pyramids-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PyramidsHeaderComponent {
  @Input() sortingType: PyramidSortingType = 'Price Ascending';
	@Output() valueChange = new EventEmitter<PyramidSortingType>();
  
  onSortingTypeChange(sortingType: PyramidSortingType) {
    this.valueChange.emit(sortingType);
  }
}
