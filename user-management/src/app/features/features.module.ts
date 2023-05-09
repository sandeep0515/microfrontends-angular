import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './component/index';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
