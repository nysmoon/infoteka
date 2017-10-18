import { Component, Input } from '@angular/core';

@Component({
	selector: 'opi-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {


@Input() pageName: string;
@Input() pageDescription: string;

	constructor() {
	}
}