import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fig-optimization';
  // lottie: DotLottie = new DotLottie({ customData: { loadFromURL: '/assets/loader.iottie' } });
  options: AnimationOptions = { path: '/assets/Loader.json' };


}
