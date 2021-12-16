import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { LandingModule } from './Pages/landing/landing.module';

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), LandingModule],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
