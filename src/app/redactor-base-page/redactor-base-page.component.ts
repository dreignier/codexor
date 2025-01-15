import { Component, Input, Type } from '@angular/core'

@Component({
  selector: 'app-redactor-page',
  imports: [],
	template: ''
})
export class RedactorBasePageComponent<T extends RedactorBasePage> {
	@Input() page!: T
}

export class RedactorBasePage {
	id: number = -1

	constructor(
		readonly component: Type<RedactorBasePageComponent<RedactorBasePage>>
	) {}

	get movable() {
		return true
	}
}
