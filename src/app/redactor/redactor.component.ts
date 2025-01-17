import { Component, HostListener, Input, OnDestroy, OnInit, Type } from '@angular/core'
import { RouterLink } from '@angular/router'
import { throttle } from 'lodash'
import { Subscription } from 'rxjs'
import { Doc } from '../../doc'
import { ButtonComponent } from '../button/button.component'
import { DialogService } from '../dialog/dialog.service'
import { FormComponent } from '../form/form.component'
import { Module } from '../module/module'
import { RedactorBasePage } from '../redactor-base-page/redactor-base-page.component'
import { RedactorPageComponent } from '../redactor-page/redactor-page.component'
import { t, TPipe } from '../t'
import { arrayDown, arrayUp } from '../util'

const PAGE_HEIGHT = 1122.52
const GAP = 16
const PAGE_HEIGHT_GAP = PAGE_HEIGHT + GAP

@Component({
  selector: 'app-redactor',
  imports: [FormComponent, ButtonComponent, TPipe, RedactorPageComponent, RouterLink],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss'
})
export class RedactorComponent implements OnInit, OnDestroy {
	@Input() module!: Module
	pages: RedactorBasePage[] = []
	displayedPages: RedactorBasePage[] = []
	doc!: Doc
	docSubscription!: Subscription

	throttledOnChange = throttle(() => { this.doc.set(this.module.serialize(this.pages)) }, 5000)

	vsStart = 0
	vsBefore = 0
	vsAfter = 0
	vsTotal = 0

	constructor(
		readonly dialog: DialogService
	) {}

	ngOnInit(): void {
		this.vsStart = document.getElementById('vs-start')!.offsetTop

		this.doc = new Doc(this.module.name + '.codex')
		this.reload()

		this.docSubscription = this.doc.change.subscribe(() => {
			this.reload()
		})
	}

	ngOnDestroy(): void {
		this.docSubscription.unsubscribe()
	}

	reload() {
		this.pages = this.doc.value ? this.module.unserialize(this.doc.value) : this.module.defaultPages()
		this.recompute()
	}

	save() {
		const json = this.module.serialize(this.pages)
		const blob = new Blob([json], { type: 'application/json' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download =  (this.module.codexTitle(this.pages) || 'codex') + '.json'
		a.click()
		URL.revokeObjectURL(url)
	}

	upload(event: Event) {
		const input = event.target as HTMLInputElement
		const file = input.files?.[0]

		if (!file) {
			return
		}

		const reader = new FileReader()

		reader.onload = () => {
			this.pages = this.module.unserialize(reader.result as string)
			this.recompute()
		}

		reader.readAsText(file)
		input.value = ''
	}

	onChange() {
		this.throttledOnChange()
	}

	reset() {
		this.dialog.confirm(t('redactor.confirmReset')).subscribe(() => {
			this.pages = this.module.defaultPages()
			this.recompute()
		})
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
