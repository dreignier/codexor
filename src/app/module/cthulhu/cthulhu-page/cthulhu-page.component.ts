import { Component } from '@angular/core'
import { PropMarkdown, PropString } from '../../../form/schemas'
import { MarkdownViewerComponent } from '../../../markdown-viewer/markdown-viewer.component'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-cthulhu-page',
  imports: [MarkdownViewerComponent],
  templateUrl: './cthulhu-page.component.html',
  styleUrl: './cthulhu-page.component.scss'
})
export class CthulhuPageComponent extends RedactorBasePageComponent<CthulhuPage> {

}

export class CthulhuPage extends RedactorBasePage {
	@PropString()
	background = ''

	@PropString()
	title = ''

	@PropMarkdown({ grow: true })
	content = ''

	constructor() {
		super(CthulhuPageComponent)
	}
}
