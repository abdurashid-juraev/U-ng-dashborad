import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ButtonModule, CommonModule],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
