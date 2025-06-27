import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { ExamComponent } from './exam/exam.component';
import { GraphComponent } from './graph/graph.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    ExamComponent,
    GraphComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
