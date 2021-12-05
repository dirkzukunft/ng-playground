import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playground-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css'],
})
export class InputDecoratorComponent implements OnInit {
  @Input() data: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
