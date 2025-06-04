import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'crm-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIcon, MatToolbar]
})
export class App {
}