import { Pipe, PipeTransform } from '@angular/core'
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslatePipe, TranslateService } from '@ngx-translate/core'
import { isObjectLike } from 'lodash'

function interpolate(params: any[]) {
	if (isObjectLike(params[0])) {
		return params[0]
	}

	const result: Record<number, any> = {}

	for (let i = 0; i < params.length; i++) {
		result[i] = params[i]
	}

	return result
}

@Pipe({
	name: 't',
	standalone: true
})
export class TPipe implements PipeTransform {

	constructor(private readonly translatePipe: TranslatePipe) { }

	transform(value: string, ...args: any[]): string {
		return this.translatePipe.transform(value, interpolate(args))
	}

}

let translate: TranslateService
export function init(translateService: TranslateService) {
	translate = translateService
}

export function t(key: string | Array<string>, ...params: any[]) {
	if (!translate) return ''

	return translate.instant(key, interpolate(params))
}

export class CodexorMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams) {
		return `$${params.key}$`
	}
}
