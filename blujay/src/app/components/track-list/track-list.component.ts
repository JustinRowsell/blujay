import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this._trackService.loadTracks();
  }

}
