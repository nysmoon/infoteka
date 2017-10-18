import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Детям";
		this.pageDescription = "Страница для детей";
	}

  ngOnInit() {
  }

}
