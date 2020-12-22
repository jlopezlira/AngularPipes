import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "safedom"
})
export class SafedomPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}