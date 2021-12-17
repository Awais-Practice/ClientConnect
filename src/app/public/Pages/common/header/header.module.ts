import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HeaderComponent, LoginDialogComponent],
  imports: [CommonModule, MatToolbarModule, MatDialogModule, MatInputModule],
  exports: [HeaderComponent],
  entryComponents: [LoginDialogComponent],
})
export class HeaderModule {}
