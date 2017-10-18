import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Специалистам";
		this.pageDescription = "Страница дла специалистов";
	}

  ngOnInit() {
  }

}
