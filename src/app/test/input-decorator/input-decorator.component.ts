import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playground-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css'],
})
export class InputDecoratorComponent implements OnInit {
  @Input() data: { key1: string; key2: string } = {
    key1: 'default value1',
    key2: 'default value2',
  };

  constructor() {}

  ngOnInit(): void {}
}
