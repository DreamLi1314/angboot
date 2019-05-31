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

import { Component, OnInit } from "@angular/core";
import { ModelService } from "../../widget/services/model.service";
import { HttpParams } from "@angular/common/http";

@Component({
   selector: "portal-welcome",
   templateUrl: "welcome.component.html",
   styleUrls: ["welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
   testValue = null;

   constructor(private modelService: ModelService) {

   }

   ngOnInit(): void {
      let formParams = new HttpParams()
         .set("f1", "v1")
         .set("f2", "v2")
         .set("name", "Jack");

      this.modelService.getModel("/api/portal/test/get").subscribe((result) => {
         console.log("=================result=======", result);
      });

      this.modelService.sendModelByForm("/api/portal/test/post", formParams.toString())
         .subscribe((result) => {
            this.testValue = result;
         });
   }
}
