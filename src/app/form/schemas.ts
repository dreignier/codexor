import { Type } from '@angular/core'

export class SchemaProperty {
	type: 'string' | 'markdown' = 'string'
	private _options: PropertyOptions

	constructor(readonly key: string, options: PropertyOptions) {
		this._options = options
	}

	string() {

	}

	markdown() {
		this.type = 'markdown'
	}

	options<T extends PropertyOptions>() {
		return this._options as T
	}

}

export class Schema {
	properties: SchemaProperty[] = []

	constructor(readonly name: string) {}

	property(key: string, options: PropertyOptions) {
		const property = new SchemaProperty(key, options)
		this.properties.push(property)
		return property
	}
}

const schemas: Map<Type<any>, Schema> = new Map()
export function getSchema(target: Type<any>) {
	let schema = schemas.get(target)
	if (!schema) {
		schema = new Schema(target.name)
		schemas.set(target, schema)
	}
	return schema
}

class PropertyOptions {

}

class MarkdownPropertyOptions extends PropertyOptions {
	fullHeight?: boolean
}

function decorator(options: PropertyOptions, callback: (property: SchemaProperty) => void) {
	return function(target: any, key: string) {
		const property = getSchema(target.constructor).property(key, options)
		callback(property)
	}
}

export function PropString() {
	return decorator({}, property => property.string())
}

export function PropMarkdown(options: MarkdownPropertyOptions = {}) {
	return decorator(options, property => property.markdown())
}
