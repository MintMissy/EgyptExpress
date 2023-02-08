import { Component, Input } from '@angular/core';
import { PyramidData } from '../../types/pyramid-data.type';

@Component({
  selector: 'app-pyramid-card',
  templateUrl: './pyramid-card.component.html',
  styleUrls: ['./pyramid-card.component.scss']
})
export class PyramidCardComponent {
  @Input() pyramidData?: PyramidData;
}
