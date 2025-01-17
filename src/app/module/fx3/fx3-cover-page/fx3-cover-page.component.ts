import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-fx3-cover-page',
  imports: [],
  templateUrl: './fx3-cover-page.component.html',
  styleUrl: './fx3-cover-page.component.scss'
})
export class Fx3CoverPageComponent extends RedactorBasePageComponent<Fx3CoverPage> {

}

export class Fx3CoverPage extends RedactorBasePage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	@PropString()
	author = ''

	constructor() {
		super(Fx3CoverPageComponent)
	}

	override get movable() {
		return false
	}
}
