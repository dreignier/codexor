import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ModuleService } from '../../module/module.service'

@Component({
	selector: 'app-codexor-page',
	imports: [RouterOutlet],
	templateUrl: './codexor-page.component.html',
	styleUrl: './codexor-page.component.scss'
})
export class CodexorPageComponent {

	constructor(
		readonly module: ModuleService
	) { }

}
