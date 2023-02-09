import { ChangeDetectionStrategy, Component } from '@angular/core';
import PyramidsContainerPresenter from '../../container/pyramids-container/pyramids-container.presenter';

@Component({
	selector: 'app-pyramids-list',
	templateUrl: './pyramids-list.component.html',
	styleUrls: ['./pyramids-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyramidsListComponent {
	pyramidsData$ = this.pyramidsPresenter.pyramidsData$.asObservable();

	constructor(private readonly pyramidsPresenter: PyramidsContainerPresenter) {}
}
