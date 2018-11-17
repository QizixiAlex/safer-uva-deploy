import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pred', component: AgmMapComponent},
  { path: 'heatmap', component: HeatmapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
