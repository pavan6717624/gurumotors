import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { ExamComponent } from './exam/exam.component';
import { GraphComponent } from './graph/graph.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'start', component: StartComponent},
   {path: 'exam', component: ExamComponent},
      {path: 'graph', component: GraphComponent},
            {path: 'video', component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
