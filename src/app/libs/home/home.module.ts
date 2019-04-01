import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule.forRoot(),
    RouterModule.forChild([{ path: "", component: HomePageComponent }])
  ]
})
export class HomeModule {}
