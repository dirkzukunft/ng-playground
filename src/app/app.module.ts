import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestInputDecoratorComponent } from './test-input-decorator/test-input-decorator.component';

@NgModule({
  declarations: [AppComponent, TestFormComponent, TestInputDecoratorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
