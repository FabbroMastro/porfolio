import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '/home' },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];