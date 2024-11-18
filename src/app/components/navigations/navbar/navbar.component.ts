import { Component } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { faBrandIcon, faIcon } from '../../../utils/icon.utils';
// import {
//   ChevronRight,
//   LucideAngularModule,
//   Menu,
//   X,
//   Github,
// } from 'lucide-angular';

/* MenuState type */
type MenuState = 'open' | 'closed';

@Component({
  selector: 'am-navbar',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        /* From state */
        /*style({
              transform: 'translateX(120%)',
              overflow: 'hidden',
              visibility: 'hidden',
              display: 'none'
            }),*/
        animate(
          '0.5s ease-in',
          /* To state */
          keyframes([
            style({ transform: 'translateX(120%) scale(0.5)', offset: 0 }),
            style({ transform: 'translateX(-120%) scale(0.5)', offset: 0.1 }),
            style({
              transform: 'translateX(-120%) scale(0.65) rotate(360deg)',
              offset: 0.7,
            }),
            style({
              transform: 'translateX(0) scale(1) rotate(360deg)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '0.5s ease-in',
          /* To state */
          keyframes([
            style({
              transform: 'translateX(0) scale(1) rotate(360deg)',
              offset: 0,
            }),
            style({
              transform: 'translateX(-120%) scale(0.65) rotate(360deg)',
              offset: 0.1,
            }),
            style({ transform: 'translateX(-120%) scale(0.5)', offset: 0.7 }),
            style({ transform: 'translateX(120%) scale(0.5)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  protected menuOpen: boolean = false;
  protected readonly faBrandIcon = faBrandIcon;
  protected readonly faIcon = faIcon;

  toggle() {
    this.menuOpen = !this.menuOpen
  }
}
