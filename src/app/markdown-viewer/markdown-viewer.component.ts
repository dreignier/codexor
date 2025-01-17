import { Component, Input } from '@angular/core'
import { Converter } from 'showdown'

@Component({
  selector: 'app-markdown-viewer',
  imports: [],
  templateUrl: './markdown-viewer.component.html',
  styleUrl: './markdown-viewer.component.scss'
})
export class MarkdownViewerComponent {
	converter = new Converter({ extensions: [{
		type: 'lang',
		regex: /([a-zéàèîïëù.?!"' «»])\n([*])/gi,
		replace: '$1<br>$2'
	}, {
		type: 'lang',
		regex: /([a-zéàèîïëù.?!"' «»*])\n([a-zéàèîïëù"' «»])/gi,
		replace: '$1<span class="mr-2"><br>&nbsp;</span>$2'
	}, {
		type: 'lang',
		regex: /§§/g,
		replace: '<span class="inline-block w-[10%]">&nbsp;</span>'
	}, {
		type: 'lang',
		regex: />>([^<\n]+)<</g,
		replace: '<center>$1</center>'
	}, {
		type: 'lang',
		regex: />>([^<>\n]+)>>/g,
		replace: '<div class="text-right">$1</center>'
	}, {
		type: 'lang',
		regex: /@@([^@\n]+)@@/g,
		replace: '<span class="link">$1</span>'
	}, {
		type: 'lang',
		regex: /~~([^~\n]+)~~/g,
		replace: '<del>$1</del>'
	}, {
		type: 'lang',
		regex: /\^\^([^\^\n]+)\^\^/g,
		replace: '<sup>$1</sup>'
	}, {
		type: 'lang',
		regex: /__([^_\n]+)__/g,
		replace: '<ins>$1</ins>'
	}, {
		type: 'lang',
		regex: /!(!+)([^!\n]+)(!+)!/g,
		replace: (match: string, p1: string, p2: string) => `<big class="bigger-${p1.length - 1}">${p2}</big>`
	}]})

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
