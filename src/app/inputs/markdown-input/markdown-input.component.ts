import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from '../input.component'

@Component({
  selector: 'app-markdown-input',
  imports: [ReactiveFormsModule],
  templateUrl: './markdown-input.component.html',
  styleUrl: './markdown-input.component.scss'
})
export class MarkdownInputComponent extends InputComponent {

}
