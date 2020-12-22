import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Wade Wilson";
  userName: string = "iMwaDEwILSon";
  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pi: number = Math.PI;
  percent: number = 0.456;
  rate: number = 3500.49;
  hero = {
    name: "Wade Wilson",
    code: "Deadpool",
    address: {
      city: "Cancun",
      country: "México"
    }
  };
  time = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Now is time!!!");
    }, 3500);
  });
  today = new Date();
  language: string = "es";
  setLanguage = (lang: string): string => (this.language = lang);
  videoURL: string = "https://www.youtube.com/embed/0c5nKrsge04";
  showPassword: boolean = false;
}
