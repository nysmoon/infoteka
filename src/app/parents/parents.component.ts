import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Родителям";
		this.pageDescription = "Страница для родителей";
	}

  ngOnInit() {
  }

}
