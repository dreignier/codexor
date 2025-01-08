import { ErrorHandler, NgZone } from '@angular/core'
import { MessageService } from './message/message.service'
import { t } from './t'

export class GlobalErrorHandler implements ErrorHandler {

	constructor(
		private messageService: MessageService,
		private zone: NgZone
	) { }

	handleError(error: any) {
		console.error(error)

		if (this.messageService.initialized()) {
			const name = error?.constructor?.name

			this.display(t(`error.${name || 'unknown'}`))
		}

		this.zone.run(() => {})
	}

	display(error: any) {
		this.messageService.error(error)
	}
}
