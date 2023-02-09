import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PyramidsModule } from './pyramids/pyramids.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, PyramidsModule, CoreModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
