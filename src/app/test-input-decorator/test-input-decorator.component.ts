import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playground-test-input-decorator',
  templateUrl: './test-input-decorator.component.html',
  styleUrls: ['./test-input-decorator.component.css'],
})
export class TestInputDecoratorComponent implements OnInit {
  @Input() data: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
