import { ScheduleComponent } from './schedule/schedule.component';
import { SavedSchedulecommonComponent } from './saved-schedulecommon/saved-schedulecommon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'saved-schedulecommon', component: SavedSchedulecommonComponent },

  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
