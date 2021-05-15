import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment.detail.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent,
    ExperimentDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StateService,
    ExperimentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
