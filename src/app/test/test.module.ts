import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';

@NgModule({
  declarations: [InputDecoratorComponent],
  imports: [CommonModule],
  exports: [InputDecoratorComponent],
})
export class TestModule {}
