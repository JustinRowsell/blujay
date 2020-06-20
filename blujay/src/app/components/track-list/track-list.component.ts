import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracks: Observable<Track[]>;
  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this._trackService.loadTracks();
    this.tracks = this._trackService.tracks;
  }

}
