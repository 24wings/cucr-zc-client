import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomePageComponent,
    PersonalPageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild([
      { path: "", component: HomePageComponent },
      { path: "personal", component: PersonalPageComponent }

    ])
  ]
})
export class HomeModule { }
