import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
//my modules
import { MyMaterialModule } from "./my-material.module";
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
//my components
import { HeaderComponent } from './header/header.component';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { CrimePredictionComponent } from './crime-prediction/crime-prediction.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgmMapComponent,
    CrimePredictionComponent,
    WelcomeComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyMaterialModule,
    MatSidenavModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA6x9cFpa6CpfvtLVf79Z3iYQ8xmjaf6yU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
