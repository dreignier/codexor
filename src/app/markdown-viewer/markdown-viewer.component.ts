import { Component, Input } from '@angular/core'
import { Converter } from 'showdown'

@Component({
  selector: 'app-markdown-viewer',
  imports: [],
  templateUrl: './markdown-viewer.component.html',
  styleUrl: './markdown-viewer.component.scss'
})
export class MarkdownViewerComponent {
	converter = new Converter()

	_content = ''
	initialized = false
	sections: Section[] = []
	bottomSections: Section[] = []

	ngOnInit(): void {
		this.initialized = true

		if (this._content) {
			this.content = this._content
		}
	}

	@Input() set content(content: string) {
		if (!this.initialized) {
			this._content = content
			return
		}

		this.sections = []
		this.bottomSections = []

		if (!content?.trim()) {
			return
		}

		for (let sectionText of content.split(/____/g)) {
			const section = new Section(this.sections.length)
			let bottom = false

			if (sectionText.startsWith('vvv') || sectionText.startsWith('VVV')) {
				sectionText = sectionText.slice(3)
				bottom = true
			}

			for (let columnText of sectionText.split(/\|\|\|\|/g)) {
				section.column(columnText)
			}

			(bottom ? this.bottomSections : this.sections).push(section)
		}
	}
}


class Section {
	columns: Column[] = []
	end = false

	constructor(
		readonly id: number
	) {}

	column(content: string) {
		this.columns.push(new Column(this.id + '-' + this.columns.length, content))
	}
}

class Column {

	constructor(
		readonly id: string,
		readonly content: string
	) {}
}
