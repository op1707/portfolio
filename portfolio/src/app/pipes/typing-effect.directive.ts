import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
  standalone: true
})
export class TypingEffectDirective {
  @Input() appTypingEffect!: string;
  @Input() typingSpeed: number = 100;
  @Input() pauseDuration: number = 1000;
  private index: number = 0; 
  private intervalId!: any; 

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    this.el.nativeElement.innerHTML = '';
    this.index = 0; 
    this.intervalId = setInterval(() => {
      if (this.index < this.appTypingEffect.length) {
        this.el.nativeElement.innerHTML += this.appTypingEffect.charAt(this.index);
        this.index++;
      } else {
        clearInterval(this.intervalId); 
        this.pauseAndRestart();
      }
    }, this.typingSpeed);
  }

  private pauseAndRestart() {
    setTimeout(() => {
      this.typeText(); 
    }, this.pauseDuration);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); 
  }

}
