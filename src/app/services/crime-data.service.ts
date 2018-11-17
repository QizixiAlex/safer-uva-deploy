import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { rawData } from '../../assets/crime_data';

@Injectable({ providedIn: 'root' })
export class CrimeDataService {
    private incidents: Incident[];

    constructor() {
        this.incidents = [];
        for (let rawIncident of rawData) {
            let incident = new Incident();
            incident.datetime = new Date(rawIncident.datetime);
            incident.incident_type = rawIncident.incident_type;
            incident.location = {
                'lat':rawIncident.latitude,
                'lng':rawIncident.longitude
            }
            this.incidents.push(incident);
        }
    }

    getIncidentLocations(startDate: Date, incidentType: string): Location[] {
        let results: Location[] = [];
        for (let incident of this.incidents) {
            if (incident.incident_type == incidentType  && incident.datetime > startDate) {
                results.push(incident.location);
            } 
        }
        return results;
    }
}

class Incident {
    datetime: Date;
    location: Location;
    incident_type: string;
}