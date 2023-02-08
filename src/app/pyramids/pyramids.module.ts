import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PyramidCardComponent } from './components/pyramid-card/pyramid-card.component';
import { PyramidsHeaderComponent } from './components/pyramids-header/pyramids-header.component';
import { SortingTypeSelectComponent } from './components/sorting-type-select/sorting-type-select.component';
import { PyramidsContainerComponent } from './container/pyramids-container/pyramids-container.component';
import { PyramidsTriviaContainerComponent } from './container/pyramids-trivia-container/pyramids-trivia-container.component';
import { AveragePyramidVolumePipe } from './pipes/average-pyramid-volume.pipe';
import { AverageSightSeeingCostPipe } from './pipes/average-sight-seeing-cost.pipe';
import { HighestPyramidBaseAreaPipe } from './pipes/highest-pyramid-base-area.pipe';
import { HighestPyramidVolumePipe } from './pipes/highest-pyramid-volume.pipe';
import { PyramidsRoutingModule } from './pyramids-routing.module';

@NgModule({
	declarations: [
		AveragePyramidVolumePipe,
		HighestPyramidVolumePipe,
		AverageSightSeeingCostPipe,
		HighestPyramidBaseAreaPipe,
		PyramidsTriviaContainerComponent,
		PyramidsContainerComponent,
		PyramidsHeaderComponent,
		PyramidCardComponent,
		SortingTypeSelectComponent,
	],
	imports: [CommonModule, HttpClientModule, RouterModule, PyramidsRoutingModule, FormsModule],
})
export class PyramidsModule {}
