import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "safepassword"
})
export class SafepasswordPipe implements PipeTransform {
  transform(value: string, show: boolean = false): string {
    return show ? value : "*".repeat(value.length);
  }
}
