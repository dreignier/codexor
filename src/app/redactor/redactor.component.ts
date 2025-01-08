import { Component, Input } from '@angular/core'
import { Module } from '../module/module'
import { RedactorPage } from '../redactor-page/redactor-page.component'

@Component({
  selector: 'app-redactor',
  imports: [],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss'
})
export class RedactorComponent {

	@Input() module!: Module

	addPage(page: RedactorPage) {

	}

}
