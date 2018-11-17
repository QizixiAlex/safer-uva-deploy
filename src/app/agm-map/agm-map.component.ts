import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit, OnDestroy {

  centerLocation: Location = {
    // coords of rontunda
    lat: 38.0356,
    lng: -78.5034,
  };
  currentLocation: Location;
  locationSubscription: Subscription;

  constructor(private locationService: LocationService) {
    this.locationSubscription = this.locationService.getLocation().subscribe(location => {
      this.currentLocation = location;
      this.centerLocation = location;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

}
