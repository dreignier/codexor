import { NgComponentOutlet } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from '../inputs/input.component'
import { MarkdownInputComponent } from '../inputs/markdown-input/markdown-input.component'
import { StringInputComponent } from '../inputs/string-input/string-input.component'
import { TPipe } from '../t'
import { getSchema, SchemaProperty } from './schemas'

@Component({
  selector: 'app-form',
  imports: [TPipe, NgComponentOutlet, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent  implements OnInit {
	@Input() schema!: any
	@Input() data?: any
	@Output() appChange = new EventEmitter<{ key: string, value: any }>()
	inputs: { property: SchemaProperty, control: FormControl, component: Type<InputComponent> }[] = []
	name: string = ''
	form!: FormGroup

	ngOnInit(): void {
		const schema = getSchema(this.schema)
		this.name = schema.name

		for (const property of schema.properties) {
			const control = new FormControl(this.data[property.key])

			control.valueChanges.subscribe(value => {
				this.data[property.key] = value === null ? undefined : value
				this.appChange.emit({ key: property.key, value: this.data[property.key] })
			})

			control.setValue(this.data[property.key])

			this.inputs.push({ property, control, component: this.component(property) })
		}

		this.form = new FormGroup(this.inputs.reduce((acc, { property, control }) => {
			acc[property.key] = control
			return acc
		}, {} as Record<string, FormControl>))
	}

	component(property: SchemaProperty): Type<InputComponent> {
		if (property.type === 'markdown') {
			return MarkdownInputComponent
		}

		return StringInputComponent
	}
}
