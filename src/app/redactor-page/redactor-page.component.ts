import { NgComponentOutlet } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RedactorBasePage } from '../redactor-base-page/redactor-base-page.component'

@Component({
  selector: 'app-redactor-page',
  imports: [NgComponentOutlet],
  templateUrl: './redactor-page.component.html',
  styleUrl: './redactor-page.component.scss'
})
export class RedactorPageComponent {
	@Input() page!: RedactorBasePage
}
