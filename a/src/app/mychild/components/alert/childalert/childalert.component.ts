import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childalert',
  templateUrl: './childalert.component.html',
  styleUrls: ['./childalert.component.css'],
})
export class ChildalertComponent implements OnInit {
  alert: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
