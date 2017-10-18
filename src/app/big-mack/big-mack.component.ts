import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-mack',
  templateUrl: './big-mack.component.html',
  styleUrls: ['./big-mack.component.css']
})
export class BigMackComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Кнопка Big Mack";
		this.pageDescription = "60 идей для Big Mack";
	}


  ngOnInit() {
  }

}
