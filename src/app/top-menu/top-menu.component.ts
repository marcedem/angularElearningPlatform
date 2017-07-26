import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

	//authInfo: AuthInfo;

	constructor() {
	}

	ngOnInit() {
		// this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);
	}

    logout() {
       // this.authService.logout();
    }

}
