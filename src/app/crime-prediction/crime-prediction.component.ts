import { Component, OnInit, Input } from '@angular/core';
import { PredictionService } from '../services/prediction.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-crime-prediction',
  templateUrl: './crime-prediction.component.html',
  styleUrls: ['./crime-prediction.component.css']
})
export class CrimePredictionComponent implements OnInit {

  location: Location;
  predictions: string[];

  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
  }

  @Input()
  set setLocation(location: Location) {
    this.location = location;
    this.predictions = this.predictionService.getFakePrediction(this.location);
  }

  toPoliceWebsite() {
    window.location.href='http://www.charlottesville.org/departments-and-services/departments-h-z/police-department';
  }

}
