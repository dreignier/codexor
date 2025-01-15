import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-cover-page',
  imports: [JsonPipe],
  templateUrl: './cthulhu-cover-page.component.html',
  styleUrl: './cthulhu-cover-page.component.scss'
})
export class CthulhuCoverPageComponent extends RedactorPageComponent<CthulhuCoverPage> {

}

export class CthulhuCoverPage extends RedactorPage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	@PropString()
	author = ''

	constructor() {
		super(CthulhuCoverPageComponent)
	}

	override get movable() {
		return false
	}
}
