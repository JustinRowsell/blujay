import { Track } from './track';

export class CartTrack {
  track: Track;
  quantity: number;

  constructor(track: Track, qty?: number | null) {
    this.track = track;
    this.quantity = qty || 1;
  }
}
