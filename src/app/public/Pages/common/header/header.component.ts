import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dailog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const config = {
      width: '355px',
      height: '227px',
    };

    this.dailog.open(LoginDialogComponent, config);
  }
}
