import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PatientTableComponent} from './patient-table/patient-table.component';


export const routes: Routes = [
    {path: '', component: PatientTableComponent}    
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
