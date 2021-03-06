import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from '../header.component/header.component';
import {FooterComponent} from '../footer.component/footer.component';
import {SearchResultsComponent} from '../SearchResults.component/SearchResults.component';
import {LandingComponent} from '../landing.component/landing.component';
import {FlashcardComponent} from '../flashcard.component/flashcard.component';
import {DevTeamComponent} from '../devteam.component/devteam.component';
import {enableProdMode} from 'angular2/core';
enableProdMode();

@RouteConfig([
    { path: '/', name: 'Home', component: LandingComponent},
    { path: '/search', name: 'Search', component: SearchResultsComponent},
    { path: '/study/:id', name: 'FlashCard', component: FlashcardComponent},
    { path: '/devteam', name: 'DevTeam', component: DevTeamComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home']}

])

@Component({
    selector: 'my-app',
    template: `<my-header></my-header><router-outlet></router-outlet><my-footer></my-footer>`,
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
