import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Location } from '../models/location';

import * as _ from 'underscore';

@Injectable({ providedIn: 'root' })
export class PredictionService {

    getFakePrediction(location: Location): string[]{
        let candidates : string[] = ['Theft', 'Assualt', 'Kidnapping', 'Arson', 'Robbery', 'Sexual Offense', 'Disorder', 'Drugs'];
        let result: string[] = _.sample(candidates, 3);
        return result;
    }
}