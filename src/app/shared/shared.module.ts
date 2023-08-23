import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class SharedModule {}
