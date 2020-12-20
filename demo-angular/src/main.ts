// this import should be first in order to load some required settings (like globals and reflect-metadata)

import { AppModule } from "./app/app.module";
import {platformNativeScriptDynamic} from "@nativescript/angular";

platformNativeScriptDynamic().bootstrapModule(AppModule);
