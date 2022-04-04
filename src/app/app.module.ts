import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { SkeletonModule } from "primeng/skeleton";
import { TableModule } from "primeng/table";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SkeletonModule,
    ButtonModule,
    TableModule,
    BadgeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
