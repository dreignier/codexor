import { Component } from '@angular/core'
import { ModuleService } from '../../module/module.service'
import { RedactorBasePage } from '../../redactor-base-page/redactor-base-page.component'
import { RedactorPageComponent } from '../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-redactor-printable-page',
  imports: [RedactorPageComponent],
  templateUrl: './redactor-printable-page.component.html',
  styleUrl: './redactor-printable-page.component.scss'
})
export class RedactorPrintablePageComponent {
	pages: RedactorBasePage[] = []

	constructor(
		readonly module: ModuleService
	) {
		this.pages = this.module.current?.defaultPages() || []
	}
}
