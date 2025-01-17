import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-fx3-title-page',
  imports: [],
  templateUrl: './fx3-title-page.component.html',
  styleUrl: './fx3-title-page.component.scss'
})
export class Fx3TitlePageComponentt extends RedactorBasePageComponent<Fx3TitlePage> {

}

export class Fx3TitlePage extends RedactorBasePage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	constructor() {
		super(Fx3TitlePageComponentt)
	}
}
