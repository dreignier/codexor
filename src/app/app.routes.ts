import { Routes } from '@angular/router'
import { CodexorPageComponent } from './pages/codexor-page/codexor-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { RedactorPageComponent } from './pages/redactor-page/redactor-page.component'

export const routes: Routes = [{
		path: ':module', redirectTo: ':module/redactor'
	}, {
		path: ':module',
		component: CodexorPageComponent,
		children: [{
			path: 'redactor',
			component: RedactorPageComponent
		}]
	}, {
	path: '', component: HomePageComponent
}]
