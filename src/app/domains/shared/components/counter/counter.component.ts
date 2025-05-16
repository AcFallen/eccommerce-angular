import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // Before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if (duration) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // After render
    // SOlo corre una vez
    // Async , then , subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((prev) => prev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // After render
    // si los hijos de este componente se han renderizado
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    // cualquier logica asyncrona
    console.log('change duration');
  }
}
