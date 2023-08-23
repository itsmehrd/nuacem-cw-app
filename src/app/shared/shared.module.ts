import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
