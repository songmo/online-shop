import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showOverlay = false;
  constructor() { }

  ngOnInit() {
  }

  public onClickOpenOverlayMenu(): void {
    console.log('button clicked');
    this.showOverlay = !this.showOverlay;
  }

  public onClickCloseOverlayMenu(): void {
    this.showOverlay = false;
  }

}
