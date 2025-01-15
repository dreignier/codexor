import { RedactorPage } from '../../redactor-page/redactor-page.component'
import { Module } from '../module'
import { CthulhuCoverPage } from './cthulhu-cover-page/cthulhu-cover-page.component'
import { CthulhuPage } from './cthulhu-page/cthulhu-page.component'
import { CthulhuTitlePage } from './cthulhu-title-page/cthulhu-title-page.component'

export class CthulhuBasePage extends RedactorPage {

}

export class Cthulhu extends Module {
	constructor() {
		super('cthulhu')
	}

	override defaultPages() {
		return [new CthulhuCoverPage(), new CthulhuTitlePage(), new CthulhuPage()]
	}

	override availablePages() {
		return [CthulhuTitlePage, CthulhuPage]
	}

}
