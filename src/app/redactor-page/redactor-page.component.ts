import { Component, Input, Type } from '@angular/core'

@Component({
  selector: 'app-redactor-page',
  imports: [],
	template: ''
})
export class RedactorPageComponent<T extends RedactorPage> {
	@Input() page!: T
}

export class RedactorPage {
	id: number = -1

	constructor(
		readonly component: Type<RedactorPageComponent<RedactorPage>>
	) {}

	get movable() {
		return true
	}
}
