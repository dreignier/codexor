import { Component, HostListener, Input, OnInit, Type } from '@angular/core'
import { ButtonComponent } from '../button/button.component'
import { FormComponent } from '../form/form.component'
import { Module } from '../module/module'
import { RedactorBasePage } from '../redactor-base-page/redactor-base-page.component'
import { RedactorPageComponent } from '../redactor-page/redactor-page.component'
import { TPipe } from '../t'
import { arrayDown, arrayUp } from '../util'

const PAGE_HEIGHT = 1122.52
const GAP = 16
const PAGE_HEIGHT_GAP = PAGE_HEIGHT + GAP

@Component({
  selector: 'app-redactor',
  imports: [FormComponent, ButtonComponent, TPipe, RedactorPageComponent],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss'
})
export class RedactorComponent implements OnInit {
	@Input() module!: Module
	pages: RedactorBasePage[] = []
	displayedPages: RedactorBasePage[] = []
	printMode = false

	vsStart = 0
	vsBefore = 0
	vsAfter = 0
	vsTotal = 0

	ngOnInit(): void {
		this.pages = this.module.defaultPages()

		this.fixIds()
		this.computeVsTotal()

		this.vsStart = document.getElementById('vs-start')!.offsetTop

		this.onScroll()
	}

	computeVsTotal() {
		this.vsTotal = this.pages.length * PAGE_HEIGHT + (this.pages.length - 1) * GAP
	}

	recompute() {
		this.fixIds()
		this.computeVsTotal()
		this.onScroll()
	}

	@HostListener('window:scroll')
	onScroll() {
		if (this.printMode) {
			return
		}

		const screenTop = document.documentElement.scrollTop
		const screenBottom = screenTop + window.innerHeight

		let startIndex = Math.floor(Math.max(0, screenTop - (PAGE_HEIGHT_GAP)) / (PAGE_HEIGHT_GAP))
		let endIndex = Math.ceil(Math.min(this.vsStart + this.vsTotal, screenBottom + PAGE_HEIGHT_GAP) / PAGE_HEIGHT_GAP)

		if (endIndex > this.pages.length) {
			endIndex = this.pages.length
		}

		this.displayedPages = this.pages.slice(startIndex, endIndex)

		this.vsBefore = startIndex * PAGE_HEIGHT_GAP
		this.vsAfter = (this.pages.length - endIndex) * PAGE_HEIGHT_GAP
	}

	fixIds() {
		for (let i = 0; i < this.pages.length; i++) {
			this.pages[i].id = i
		}
	}

	addPage(index: number, constructor: Type<RedactorBasePage>) {
		const page = new constructor()
		this.pages.splice(index, 0, page)
		this.recompute()
	}

	pageUp(page: RedactorBasePage) {
		if (page.id <= 0 || !page.movable || !this.pages[page.id - 1]?.movable) {
			return
		}

		arrayUp(this.pages, page)
		this.recompute()
	}

	pageDown(page: RedactorBasePage) {
		if (page.id >= this.pages.length - 1 || !page.movable || !this.pages[page.id + 1]?.movable) {
			return
		}

		arrayDown(this.pages, page)
		this.recompute()
	}

	removePage(page: RedactorBasePage) {
		this.pages.splice(page.id, 1)
		this.recompute()
	}

}
