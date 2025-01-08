import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-redactor-page',
  imports: [],
  templateUrl: './redactor-page.component.html',
  styleUrl: './redactor-page.component.scss'
})
export class RedactorPageComponent<T extends RedactorPage> {
	@Input() page!: T
}

export class RedactorPage {

}
