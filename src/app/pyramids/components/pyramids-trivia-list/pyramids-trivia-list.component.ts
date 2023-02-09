import { ChangeDetectionStrategy, Component } from '@angular/core';
import PyramidsContainerPresenter from '../../container/pyramids-container/pyramids-container.presenter';

@Component({
	selector: 'app-pyramids-trivia-list[pyramidsData]',
	templateUrl: './pyramids-trivia-list.component.html',
	styleUrls: ['./pyramids-trivia-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyramidsTriviaListComponent {
	pyramidsData$ = this.pyramidsPresenter.pyramidsData$.asObservable();

	constructor(private readonly pyramidsPresenter: PyramidsContainerPresenter) {}
}
