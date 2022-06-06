import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ThemeTogglerComponent } from './components/header/theme-toggler/theme-toggler.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserPanelComponent } from './components/header/user-panel/user-panel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ThemeTogglerComponent,
    LogoComponent,
    UserPanelComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
