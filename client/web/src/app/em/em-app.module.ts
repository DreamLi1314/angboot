/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModelService } from "../widget/services/model.service";
import { WidgetModule } from "../widget/widget.module";
import { EMAppComponent } from "./app.component";
import { MODULE_COMPONENTS } from "./index.components";
import { EMAppRoutingModule } from "./app-routing.module";
import { EmMonitorModule } from "./monitor/em-monitor.module";
import { SidenavService } from "./service/SidenavService";

@NgModule({
   declarations: [
      EMAppComponent,
      ...MODULE_COMPONENTS
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      EMAppRoutingModule,
      EmMonitorModule,
      MatToolbarModule,
      MatButtonModule
   ],
   bootstrap: [
      EMAppComponent
   ],
   entryComponents: [
   ],
   providers: [
      SidenavService
   ]
})
export class EmAppModule {
}
