import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Doc } from '../../../doc'
import { ModuleService } from '../../module/module.service'
import { RedactorBasePage } from '../../redactor-base-page/redactor-base-page.component'
import { RedactorPageComponent } from '../../redactor-page/redactor-page.component'

@Component({
  selector: 'app-redactor-printable-page',
  imports: [RedactorPageComponent],
  templateUrl: './redactor-printable-page.component.html',
  styleUrl: './redactor-printable-page.component.scss'
})
export class RedactorPrintablePageComponent implements OnInit, OnDestroy {
	pages: RedactorBasePage[] = []
	doc!: Doc
	docSubscription!: Subscription

	constructor(
		readonly module: ModuleService
	) {}

	ngOnInit(): void {
		this.doc = new Doc(this.module.current!.name + '.codex')
		this.reload()

		this.docSubscription = this.doc.change.subscribe(() => {
			this.reload()
		})
	}

	ngOnDestroy(): void {
		this.docSubscription.unsubscribe()
	}

	reload() {
		this.pages = this.doc.value ? this.module.current!.unserialize(this.doc.value) : this.module.current!.defaultPages()
	}
}
