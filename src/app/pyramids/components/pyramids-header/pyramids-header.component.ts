import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PyramidSortingType } from '../sorting-type-select/sorting-type-select.component';

@Component({
  selector: 'app-pyramids-header',
  templateUrl: './pyramids-header.component.html',
  styleUrls: ['./pyramids-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PyramidsHeaderComponent {
  @Input() sortingType = PyramidSortingType.PRICE_ASCENDING;
	@Output() valueChange = new EventEmitter<PyramidSortingType>();
  
  onSortingTypeChange(sortingType: PyramidSortingType) {
    this.valueChange.emit(sortingType);
  }
}
