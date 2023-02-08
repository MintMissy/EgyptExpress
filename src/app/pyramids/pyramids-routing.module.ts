import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyramidsContainerComponent } from './container/pyramids-container/pyramids-container.component';
import { PyramidsTriviaContainerComponent } from './container/pyramids-trivia-container/pyramids-trivia-container.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: PyramidsContainerComponent },
	{ path: 'trivia', component: PyramidsTriviaContainerComponent },
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PyramidsRoutingModule {}
