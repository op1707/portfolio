import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../pipes/typing-effect.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TypingEffectDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

}
