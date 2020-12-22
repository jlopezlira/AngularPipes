import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { SafedomPipe } from "./pipes/safedom.pipe";
import { SafepasswordPipe } from "./pipes/safepassword.pipe";
import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [AppComponent, CapitalizePipe, SafedomPipe, SafepasswordPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
