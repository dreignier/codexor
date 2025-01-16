import { RedactorBasePage } from '../../redactor-base-page/redactor-base-page.component'
import { Module } from '../module'
import { CthulhuCoverPage } from './cthulhu-cover-page/cthulhu-cover-page.component'
import { CthulhuPage } from './cthulhu-page/cthulhu-page.component'
import { CthulhuTitlePage } from './cthulhu-title-page/cthulhu-title-page.component'

export class Cthulhu extends Module {
	constructor() {
		super('cthulhu')
	}

	override pages() {
		return [CthulhuCoverPage, CthulhuTitlePage, CthulhuPage]
	}

	override defaultPages() {
		return [new CthulhuCoverPage(), new CthulhuTitlePage(), new CthulhuPage()]
	}

	override availablePages() {
		return [CthulhuTitlePage, CthulhuPage]
	}

	override codexTitle(pages: RedactorBasePage[]) {
		return (pages[0] as CthulhuCoverPage)?.title || ''
	}

}
