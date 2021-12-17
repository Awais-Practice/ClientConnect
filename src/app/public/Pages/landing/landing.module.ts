import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../common/header/header.module';
import { FooterModule } from '../common/footer/footer.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, HeaderModule, FooterModule],
  exports: [LandingComponent],
})
export class LandingModule {}
