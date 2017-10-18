import { Component } from '@angular/core'

@Component({
	selector: 'opi-home',
	templateUrl: './home.component.html'
})

export class HomeComponent {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Инфотека";
		this.pageDescription = "Здесь будет описание проекта";
	}

}