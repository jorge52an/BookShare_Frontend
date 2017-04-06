import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from "./homepage/app.component";
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AvailableprodComponent } from './availableprod/availableprod.component';
import { RegistryComponent } from './registry/registry.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
//importar rutas
import { routing } from "./services/routes";
@NgModule(
{
	declarations: [
		AppComponent,
		LoginComponent,
		ContactusComponent,
		AvailableprodComponent,
		RegistryComponent,
		ProfileComponent,
		ProductComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AlertModule.forRoot(),
		//rutas
		routing	
	],
	providers: [],
	bootstrap: [AppComponent]
} )


export class AppModule{}
