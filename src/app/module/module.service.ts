import { Injectable } from '@angular/core'
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router'
import { filter, map } from 'rxjs'
import { Cthulhu } from './cthulhu/cthulhu'
import { Fx3 } from './fx3/fx3'
import { Module } from './module'

const MODULES = [new Cthulhu(), new Fx3()]
const PARAM_NAME = 'module'

@Injectable({
	providedIn: 'root'
})
export class ModuleService {

	modules: Module[] = MODULES
	current?: Module

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {
		this.set(this.readInRouteParams() || this.readInLocation())

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd || event instanceof NavigationStart),
			map(() => {
				let route: ActivatedRoute | null = this.router.routerState.root

				while (route) {
					const name = this.readInRouteParams(route)
					if (name) {
						return name
					}

					route = route.firstChild
				}

				return undefined
			})
		).subscribe(name => this.set(name))
	}

	get() {
		if (this.current) {
			return this.current
		}

		const name = this.readInLocation()
		if (name) {
			return this.getByName(name)
		}

		return undefined
	}

	set(name?: string) {
		if (name) {
			this.current = this.getByName(name)
		} else {
			this.current = undefined
		}
	}

	readInLocation() {
		return window.location.pathname.split('/')[1]
	}

	readInRouteParams(route?: ActivatedRoute) {
		return (route || this.route).snapshot.params[PARAM_NAME]
	}

	getByName(name: string) {
		return this.modules.find(module => module.name === name)
	}
}
