import { EventEmitter } from '@angular/core'

export class Doc {
	value!: string
	change = new EventEmitter<string>()

	constructor(
		readonly key: string
	) {
		this.reload()
	}

	set(value: string) {
		this.value = value
		this.store()
	}

	store() {
		localStorage.setItem(this.key, this.value)
	}

	reload() {
		this.value = localStorage.getItem(this.key) || ''
		this.change.emit(this.value)
	}
}

const docs = new Map<string, Doc>()

export function doc<T>(key: string) {
	if (!docs.has(key)) {
		docs.set(key, new Doc(key))
	}

	return docs.get(key)
}

window.addEventListener('storage', event => {
	if (!event.key) {
		return
	}

	docs.get(event.key)?.reload()
})
