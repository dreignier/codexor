import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ModuleService } from '../../module/module.service'
import { TPipe } from '../../t'

@Component({
  selector: 'app-home-page',
  imports: [TPipe, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

	constructor(
		readonly module: ModuleService
	) {}

}
