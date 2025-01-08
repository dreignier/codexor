import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ModuleService } from '../../module/module.service'

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

	constructor(
		readonly module: ModuleService
	) {}

}
