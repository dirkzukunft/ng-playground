import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playground-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
})
export class TestFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: string[] = [];
  newItem: string = '';
  errorMessageItem: string = '';

  addItem() {
    if (!this.newItem) {
      this.errorMessageItem = 'Please enter a value';
      return;
    }

    this.list.push(this.newItem);
    this.newItem = '';
  }

  updateNewItem(newValue: string) {
    this.newItem = newValue;
    this.errorMessageItem = '';
  }
}
