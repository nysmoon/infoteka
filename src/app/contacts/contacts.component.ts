import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

pageName: string;
pageDescription: string;

	constructor() {
		this.pageName = "Контакты";
		this.pageDescription = "Как с нами связаться";
	}

  ngOnInit() {
  }

}
