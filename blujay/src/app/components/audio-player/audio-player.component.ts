import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';
import { AudioPlayerService } from 'src/app/services/audio-player/audio-player.service';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})

export class AudioPlayerComponent implements OnInit {
  track: Track;
  trackSub: Subscription;
  visible$: Observable<boolean>;
  trackIsPlaying$: Observable<boolean>;

  constructor(private playerService: AudioPlayerService, private cartService: CartService,
              private toastService: ToastService) {}

  ngOnInit(): void {
    this.trackSub = this.playerService.playingTrack$.subscribe((track) => {
      this.track = track;
    });
    this.visible$ = this.playerService.showPlayer$;
    this.trackIsPlaying$ = this.playerService.playing$;
  }

  addToCart(track: Track) {
    this.cartService.addToCart(track);
    this.toastService.sendMessage('More heat in the cart.', 'is-success');
  }

  hidePlayer() {
    this.playerService.clearTrack();
  }
}
