import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../core/models/menu.model';
import { MenuService } from '../../services/menu.service';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenuComponent,
  ],
})
export class SidebarMenuComponent implements OnInit {
  constructor(
    public menuService: MenuService,
    private domSanitizer: DomSanitizer,
  ) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public getIcon(icon: string | undefined): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(icon || '');
  }

  ngOnInit(): void {}
}
