import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../style-bubbles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'portfolio';

  makeBubbles = (bubbleNum) => {
    const bubbleWrapper = document.querySelector('.bubble-wrapper');
    for (let i = 0; i < bubbleNum; i++) {
      const span = document.createElement('span');
      const randomNumber = (Math.floor(Math.random() * 100));
      span.classList.add('bubble');
      span.style.height = randomNumber + 'px';
      span.style.width = randomNumber + 'px';
      bubbleWrapper.appendChild(span);
    }
  }

  detectIE = () => {
    if (navigator.userAgent.match(/Trident.*rv:11\./)) {
      document.querySelector('body').classList.add('ie11');
    }
  }

  ngOnInit() {
    this.detectIE();
    this.makeBubbles(20);
  }
}
