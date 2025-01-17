import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { ApplicationConfig, ErrorHandler, importProvidersFrom, LOCALE_ID, NgZone, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { MissingTranslationHandler, TranslateCompiler, TranslateModule, TranslatePipe } from '@ngx-translate/core'
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler'
import { routes } from './app.routes'
import { GlobalErrorHandler } from './error-handler'
import { MessageService } from './message/message.service'
import { CodexorMissingTranslationHandler } from './t'

export const appConfig: ApplicationConfig = {
  providers: [
		{ provide: LOCALE_ID, useValue: 'fr' },
		{ provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: 'GMT+1', locale: 'fr', format: 'longDate' } },
		provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
		importProvidersFrom(
			TranslateModule.forRoot({
				compiler: {
					provide: TranslateCompiler,
					useClass: TranslateMessageFormatCompiler
				},
				missingTranslationHandler: {
					provide: MissingTranslationHandler,
					useClass: CodexorMissingTranslationHandler
				}
			})
		),
		TranslatePipe,
		{
			provide: ErrorHandler,
			useFactory(messageService: MessageService, zone: NgZone) { return new GlobalErrorHandler(messageService, zone) },
			deps: [MessageService, NgZone]
		}
	]
};


