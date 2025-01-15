import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IconComponent } from "../icon/icon.component"

@Component({
  selector: 'app-button',
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

	@Input() icon?: string
	@Input() label?: string
	@Input() title?: string
	@Input() size = 5
	@Output() appClick = new EventEmitter<void>()

	sizes: Record<string, string> = {
		'1' : 'size-1',
		'2' : 'size-2',
		'3' : 'size-3',
		'4' : 'size-4',
		'5' : 'size-5',
		'6' : 'size-6',
		'7' : 'size-7',
		'8' : 'size-8',
		'9' : 'size-9',
		'10' : 'size-10'
	}

	heights: Record<string, string> = {
		'1' : 'height-1',
		'2' : 'height-2',
		'3' : 'height-3',
		'4' : 'height-4',
		'5' : 'height-5',
		'6' : 'height-6',
		'7' : 'height-7',
		'8' : 'height-8',
		'9' : 'height-9',
		'10' : 'height-10'
	}

	widths: Record<string, string> = {
		'1' : 'width-1',
		'2' : 'width-2',
		'3' : 'width-3',
		'4' : 'width-4',
		'5' : 'width-5',
		'6' : 'width-6',
		'7' : 'width-7',
		'8' : 'width-8',
		'9' : 'width-9',
		'10' : 'width-10'
	}

}
