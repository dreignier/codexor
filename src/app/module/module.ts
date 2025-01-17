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

	serialize(pages: RedactorBasePage[]) {
		const types = this.pages()

		return JSON.stringify({
			module: this.name,
			pages: pages.map(page => ({ classId: types.indexOf(page.constructor as Type<RedactorBasePage>), ...page }))
		})
	}

	unserialize(json: string) {
		const data = JSON.parse(json)

		if (data.module !== this.name) {
			throw new Error('Module mismatch')
		}

		const types = this.pages()
		return data.pages.map((page: any) => {
			const classId = page.classId
			delete page.classId

			const result = new types[classId]()
			Object.assign(result, page)
			return result
		})
	}
}
