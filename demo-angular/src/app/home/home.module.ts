import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {NativeScriptCommonModule, registerElement} from "@nativescript/angular";

registerElement("AsitsVideoRecorder", () => require("nativescript-asitsvideorecorder").AsitsVideoRecorder);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
