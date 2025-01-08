import { Component } from '@angular/core'
import { ModuleService } from '../../module/module.service'
import { RedactorComponent } from '../../redactor/redactor.component'

@Component({
  selector: 'app-redactor-page',
  imports: [RedactorComponent],
  templateUrl: './redactor-page.component.html',
  styleUrl: './redactor-page.component.scss'
})
export class RedactorPageComponent {

	constructor(
		readonly module: ModuleService
	) {}

}
