import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { HomeComponentRoutingModule } from "./home.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeComponentRoutingModule
    ],
    exports: [],
    declarations: [HomeComponent]
})
export class HomeComponentModule {}