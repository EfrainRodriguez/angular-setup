import { Component, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../../core/models/menu.model';
import { MenuService } from '../../../../services/menu.service';
import { NavbarMobileSubmenuComponent } from '../navbar-mobile-submenu/navbar-mobile-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NavbarMobileSubmenuComponent,
  ],
})
export class NavbarMobileMenuComponent implements OnInit {
  constructor(
    public menuService: MenuService,
    private domSanitizer: DomSanitizer,
  ) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }

  public getIcon(icon: string | undefined): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(icon || '');
  }

  ngOnInit(): void {}
}
