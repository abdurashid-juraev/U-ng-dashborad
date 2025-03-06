import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ButtonModule],
})
export class LayoutComponent {}
