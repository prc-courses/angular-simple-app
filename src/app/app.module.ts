import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment.detail.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetComponent } from './widgets/widget.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';
import { PricingService } from "./common/pricing.service";
import { WidgetsService } from "./common/widgets.service";
import { WidgetItemComponent } from './widgets/widget-item/widget.item.component';
import { WidgetListComponent } from './widgets/widget-list/widget.list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent,
    ExperimentDetailComponent,
    WidgetsComponent,
    WidgetComponent,
    WidgetItemComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StateService,
    ExperimentsService,
    PricingService,
    WidgetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
