import { Type } from '@angular/core'
import { RedactorBasePage } from '../redactor-base-page/redactor-base-page.component'

export class Module {
	constructor(
		readonly name: string
	) {}

	pages(): Type<RedactorBasePage>[] {
		return []
	}

	defaultPages() : RedactorBasePage[] {
		return []
	}

	availablePages() : Type<RedactorBasePage>[] {
		return []
	}

	codexTitle(pages: RedactorBasePage[]): string {
		return ''
	}
}
