import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Location } from '../models/location';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private subject = new Subject<Location>();

  sendLocation(location: Location) {
    this.subject.next(location);
  }

  clearLocation() {
    this.subject.next();
  }

  getLocation(): Observable<Location> {
    return this.subject.asObservable();
  }
}
