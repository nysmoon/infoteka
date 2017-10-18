import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExpertsComponent } from './experts/experts.component';
import { ParentsComponent } from './parents/parents.component';
import { KidsComponent } from './kids/kids.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BigMackComponent } from './big-mack/big-mack.component';

const opiRoutes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'experts', component: ExpertsComponent},
	{ path: 'parents', component: ParentsComponent},
	{ path: 'kids', component: KidsComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'contacts', component: ContactsComponent},
	{ path: 'big-mack', component: BigMackComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(opiRoutes)],
	exports: [RouterModule]
})

export class RoutingModule {

}