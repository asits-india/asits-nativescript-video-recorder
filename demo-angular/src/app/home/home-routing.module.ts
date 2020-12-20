import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import {NativeScriptRouterModule} from "@nativescript/angular";

const routes: Routes = [
    { path: "", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
