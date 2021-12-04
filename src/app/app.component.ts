import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: string[] = [];
  newItem: string = '';

  addItem() {
    this.list.push(this.newItem);
    this.newItem = '';
  }

  updateNewItem(newValue: string) {
    this.newItem = newValue;
  }
}
