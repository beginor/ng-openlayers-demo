import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { RouteList } from '../../app.routes';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    public state: any;
    public routes: any[];

    public ngOnInit() {
        this.routes = RouteList.filter(r => !!r.text);
    }

}
