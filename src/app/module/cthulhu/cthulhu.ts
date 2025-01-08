import { Module } from '../module'
import { CthulhuCoverPage } from './cthulhu-cover-page/cthulhu-cover-page.component'
import { CthulhuPage } from './cthulhu-page/cthulhu-page.component'
import { CthulhuTitlePage } from './cthulhu-title-page/cthulhu-title-page.component'

export class Cthulhu extends Module {
	constructor() {
		super('cthulhu')
	}

	override defaultPages() {
		return [new CthulhuCoverPage(), new CthulhuTitlePage(), new CthulhuPage()]
	}
}
