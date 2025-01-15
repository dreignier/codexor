import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from '../input.component'

@Component({
  selector: 'app-string-input',
  imports: [ReactiveFormsModule],
  templateUrl: './string-input.component.html',
  styleUrl: './string-input.component.scss'
})
export class StringInputComponent extends InputComponent {

}
