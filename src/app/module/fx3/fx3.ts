import { RedactorBasePage } from '../../redactor-base-page/redactor-base-page.component'
import { Module } from '../module'
import { Fx3CoverPage } from './fx3-cover-page/fx3-cover-page.component'
import { Fx3Page } from './fx3-page/fx3-page.component'
import { Fx3TitlePage } from './fx3-title-page/fx3-title-page.component'

export class Fx3 extends Module {
	constructor() {
		super('fx3')
	}

	override pages() {
		return [Fx3CoverPage, Fx3Page, Fx3TitlePage]
	}

	override defaultPages() {
		return [new Fx3CoverPage(), new Fx3Page()]
	}

	override availablePages() {
		return [Fx3Page, Fx3TitlePage]
	}

	override codexTitle(pages: RedactorBasePage[]) {
		return (pages[0] as Fx3CoverPage)?.title || ''
	}

}
