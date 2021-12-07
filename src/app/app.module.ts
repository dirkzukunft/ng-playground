import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent, TestFormComponent],
  imports: [BrowserModule, TestModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
