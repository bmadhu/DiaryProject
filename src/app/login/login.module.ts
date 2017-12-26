import { NgModule } from "@angular/core";
import { LoginRouter } from "./login.router";
import { LoginComponent } from "./login.component";


@NgModule({
    imports: [LoginRouter],
    declarations: [LoginComponent]
})

export class LoginModule {

}