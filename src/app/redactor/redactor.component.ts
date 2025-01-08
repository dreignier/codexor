import { NgComponentOutlet } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Module } from '../module/module'
import { RedactorPage } from '../redactor-page/redactor-page.component'

@Component({
  selector: 'app-redactor',
  imports: [NgComponentOutlet],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss'
})
export class RedactorComponent implements OnInit {

	@Input() module!: Module
	pages: RedactorPage[] = []

	ngOnInit(): void {
		this.pages = this.module.defaultPages()

		this.fixIds()
	}

	fixIds() {
		for (let i = 0; i < this.pages.length; i++) {
			this.pages[i].id = i
		}
	}



}
