import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openLink(link) {
    this.router.navigate([link]);
  }

}
