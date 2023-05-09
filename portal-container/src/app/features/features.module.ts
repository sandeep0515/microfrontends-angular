import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/index';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
