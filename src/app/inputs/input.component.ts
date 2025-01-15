import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { SchemaProperty } from '../form/schemas'

@Component({
	selector: 'app-input',
	template: ''
})
export class InputComponent {
	@Input() control!: FormControl
	@Input() property!: SchemaProperty
}
