import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { CrimeDataService } from '../services/crime-data.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  centerLocation: Location = {
    // coords of rontunda
    lat: 38.0356,
    lng: -78.5034,
  };
  crimeTypes: string[] = [
    'Arson','Robbery','Other Sexual Offense','Kidnapping','Theft of Vehicle','Theft from Vehicle','Disorder','Breaking & Entering','Drugs','Property Crime','Assault','Theft'
  ];
  timeFrames: number[] = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ];
  selectedCrimeType: string;
  selectedTimeFrame: number;
  crimeLocations: Location[];
  constructor(private crimeDataService: CrimeDataService) { }

  ngOnInit() {
  }

  searchIncidents(){
    let startDate: Date = new Date(Date.now());
    startDate.setMonth(startDate.getMonth()-this.selectedTimeFrame);
    this.crimeLocations = this.crimeDataService.getIncidentLocations(startDate, this.selectedCrimeType);
  }

}
