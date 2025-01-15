import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-cthulhu-cover-page',
  imports: [JsonPipe],
  templateUrl: './cthulhu-cover-page.component.html',
  styleUrl: './cthulhu-cover-page.component.scss'
})
export class CthulhuCoverPageComponent extends RedactorBasePageComponent<CthulhuCoverPage> {

}

export class CthulhuCoverPage extends RedactorBasePage {
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
