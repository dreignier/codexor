import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { PropMarkdown, PropString } from '../../../form/schemas'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-page',
  imports: [JsonPipe],
  templateUrl: './cthulhu-page.component.html',
  styleUrl: './cthulhu-page.component.scss'
})
export class CthulhuPageComponent extends RedactorPageComponent<CthulhuPage> {

}

export class CthulhuPage extends RedactorPage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	@PropMarkdown({ fullHeight: true })
	content = ''

	constructor() {
		super(CthulhuPageComponent)
	}
}
