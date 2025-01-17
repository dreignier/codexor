import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import i18n from '../assets/i18n/fr.json'
import { DialogComponent } from './dialog/dialog.component'
import { MessageComponent } from './message/message.component'
import { init } from './t'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent, DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

	constructor(translate: TranslateService) {
		init(translate)
		translate.setTranslation('fr', i18n)
		translate.setDefaultLang('fr')
	}

}
