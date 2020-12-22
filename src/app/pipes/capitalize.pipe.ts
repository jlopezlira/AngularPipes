import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();
    let phrases = value.split(" ");
    if (all) {
      phrases = phrases.map(
        (phrase) => phrase[0].toUpperCase() + phrase.substr(1)
      );
    } else {
      return (phrases[0] = phrases[0][0].toUpperCase() + phrases[0].substr(1));
    }
    return phrases.join(" ");
  }
}
