import { RouterModule,Routes } from '@angular/router'
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const App_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const App_routing = RouterModule.forRoot(App_routes);