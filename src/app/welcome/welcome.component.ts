import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() {
  }

  onLocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation: Location = {lat: position.coords.latitude, lng: position.coords.longitude};
        this.locationService.sendLocation(currentLocation);
      });
    } else {
      alert('Location Access Denied');
    }
    this.router.navigateByUrl('/pred');
  }

  onHeatmap() {
    this.router.navigateByUrl('/heatmap');
  }
}
