import { Component } from '@angular/core'
import { PropMarkdown, PropString } from '../../../form/schemas'
import { MarkdownViewerComponent } from '../../../markdown-viewer/markdown-viewer.component'
import { RedactorBasePage, RedactorBasePageComponent } from '../../../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-fx3-page',
  imports: [MarkdownViewerComponent],
  templateUrl: './fx3-page.component.html',
  styleUrl: './fx3-page.component.scss'
})
export class Fx3PageComponent extends RedactorBasePageComponent<Fx3Page> {

}

export class Fx3Page extends RedactorBasePage {
	@PropString()
	title = ''

	@PropMarkdown({ grow: true })
	content = ''

	constructor() {
		super(Fx3PageComponent)
	}
}
