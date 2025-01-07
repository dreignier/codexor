import { Component } from '@angular/core'
import { RedactorPage, RedactorPageComponent } from '../../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-cthulhu-cover-page',
  imports: [],
  templateUrl: './cthulhu-cover-page.component.html',
  styleUrl: './cthulhu-cover-page.component.scss'
})
export class CthulhuCoverPageComponent extends RedactorPageComponent<CthulhuCoverPage> {

}

export class CthulhuCoverPage extends RedactorPage {

}
