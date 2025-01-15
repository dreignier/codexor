import { Type } from '@angular/core'
import { RedactorPage } from '../redactor-page/redactor-page.component'

export class Module {
	constructor(
		readonly name: string
	) {}

	defaultPages() : RedactorPage[] {
		return []
	}

	availablePages() : Type<RedactorPage>[] {
		return []
	}
}
