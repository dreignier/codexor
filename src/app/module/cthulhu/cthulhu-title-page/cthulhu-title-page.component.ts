import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-cthulhu-title-page',
  imports: [JsonPipe],
  templateUrl: './cthulhu-title-page.component.html',
  styleUrl: './cthulhu-title-page.component.scss'
})
export class CthulhuTitlePageComponent extends RedactorBasePageComponent<CthulhuTitlePage> {

}

export class CthulhuTitlePage extends RedactorBasePage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	constructor() {
		super(CthulhuTitlePageComponent)
	}
}

