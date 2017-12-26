import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
    toggleMenu:boolean;

    constructor(private router:Router) {
        this.toggleMenu = false;
    }

    onMenu() {
        this.toggleMenu = !this.toggleMenu;
    }

    onLogout() {
        this.router.navigate(['/login']);
    }

}