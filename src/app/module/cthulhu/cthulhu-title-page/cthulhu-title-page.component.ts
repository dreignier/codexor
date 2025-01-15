import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { PropString } from '../../../form/schemas'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-title-page',
  imports: [JsonPipe],
  templateUrl: './cthulhu-title-page.component.html',
  styleUrl: './cthulhu-title-page.component.scss'
})
export class CthulhuTitlePageComponent extends RedactorPageComponent<CthulhuTitlePage> {

}

export class CthulhuTitlePage extends RedactorPage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	constructor() {
		super(CthulhuTitlePageComponent)
	}
}

