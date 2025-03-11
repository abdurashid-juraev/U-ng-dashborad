import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ButtonModule, MegaMenu, CommonModule],
})
export class LayoutComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        root: true,
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        root: true,
      },
      {
        label: 'Templates',
        icon: 'pi pi-database',
        root: true,
      },
    ];
  }
}
