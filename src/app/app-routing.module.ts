import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetComponent } from './widgets/widget.component';


const routes: Routes = [
  {path: '',            component: HomeComponent },
  {path: 'home',        component: HomeComponent },
  {path: 'about',       component: AboutComponent },
  {path: 'experiments', component: ExperimentsComponent },
  {path: 'widgets',     component: WidgetsComponent },
  {path: 'widget/:id',  component: WidgetComponent },
  {path: '*',           component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
