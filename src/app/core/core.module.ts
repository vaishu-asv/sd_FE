import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SavedSchedulecommonComponent } from './saved-schedulecommon/saved-schedulecommon.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    SavedSchedulecommonComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
