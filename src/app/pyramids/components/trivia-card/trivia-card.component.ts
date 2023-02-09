import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UITriviaCard } from './trivia-card.interface';

@Component({
	selector: 'app-trivia-card',
	templateUrl: './trivia-card.component.html',
	styleUrls: ['./trivia-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriviaCardComponent {
	@Input() triviaCard?: UITriviaCard;
}
