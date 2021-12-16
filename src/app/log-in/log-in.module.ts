import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LogInHeaderComponent } from './log-in-header/log-in-header.component';

@NgModule({
  declarations: [LogInComponent, LogInHeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class LogInModule {}
