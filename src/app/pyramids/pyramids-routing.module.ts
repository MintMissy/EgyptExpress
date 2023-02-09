import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyramidsListComponent } from './components/pyramids-list/pyramids-list.component';
import { PyramidsTriviaListComponent } from './components/pyramids-trivia-list/pyramids-trivia-list.component';
import { PyramidsContainerComponent } from './container/pyramids-container/pyramids-container.component';

const routes: Routes = [
	{
		path: '',
		component: PyramidsContainerComponent,
		children: [
			{ path: '', pathMatch: 'full', component: PyramidsListComponent },
			{ path: 'trivia', component: PyramidsTriviaListComponent },
		],
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PyramidsRoutingModule {}
