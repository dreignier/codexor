import { Component } from '@angular/core'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-title-page',
  imports: [],
  templateUrl: './cthulhu-title-page.component.html',
  styleUrl: './cthulhu-title-page.component.scss'
})
export class CthulhuTitlePageComponent extends RedactorPageComponent<CthulhuTitlePage> {

}

export class CthulhuTitlePage extends RedactorPage {
	constructor() {
		super(CthulhuTitlePageComponent)
	}
}

