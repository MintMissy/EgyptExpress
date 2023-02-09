import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PyramidsModule } from './pyramids/pyramids.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, PyramidsModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
