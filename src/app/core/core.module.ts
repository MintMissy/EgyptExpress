import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
	declarations: [PageHeaderComponent, FooterComponent],
	imports: [CommonModule],
	exports: [PageHeaderComponent, FooterComponent],
})
export class CoreModule {}
