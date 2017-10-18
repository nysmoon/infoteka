import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "О Проекте";
		this.pageDescription = "Здесь будет описание проекта";
	}


  ngOnInit() {
  }

}
