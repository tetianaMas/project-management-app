import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isDark = true;

  private currentTheme = this.isDark ? 'theme-dark' : 'theme-light';

  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer) {
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.currentTheme);
    this.componentCssClass = this.currentTheme;
  }
}
