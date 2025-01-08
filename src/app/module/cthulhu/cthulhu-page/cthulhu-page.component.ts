import { Component } from '@angular/core'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-page',
  imports: [],
  templateUrl: './cthulhu-page.component.html',
  styleUrl: './cthulhu-page.component.scss'
})
export class CthulhuPageComponent extends RedactorPageComponent<CthulhuPage> {

}

export class CthulhuPage extends RedactorPage {
	constructor() {
		super(CthulhuPageComponent)
	}
}
