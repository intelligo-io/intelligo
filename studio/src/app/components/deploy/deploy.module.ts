﻿import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { DeployLandingComponent } from './landing/deploy-landing/deploy-landing.component';
import { HighlightJsService } from 'angular2-highlight-js';

export const DEPLOY_ROUTES: Routes = [
	{
		path: "",
		component: DeployLandingComponent
	}
];

@NgModule({
	declarations: [
		DeployLandingComponent
	],
	entryComponents: [
		
	],
	imports: [
		SharedModule
	],
	schemas: [
		
	],
	providers: [
		HighlightJsService
	]
})
export class DeployModule { }

