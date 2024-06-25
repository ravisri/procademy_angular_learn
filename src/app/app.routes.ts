import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'dashboard'},
    {
        path:'dashboard',
        loadComponent:() => import('./pages/container/container.component').then((m) => m.ContainerComponent),
        children:[
            {path:'', pathMatch:'full', redirectTo:'data-binding'},
            {path:'data-binding',
                loadComponent:() => 
                    import('./pages/data-binding/data-binding.component').then((m) => m.DataBindingComponent)
            },
            {path:'two-way-binding',
                loadComponent:() => import('./pages/two-way-data-binding/two-way-data-binding.component').then((m) => m.TwoWayDataBindingComponent)
            },
            {
                path:'view-children',
                loadComponent:() => import('./pages/view-children/forms/forms.component').then((m) => m.FormsComponent)
            },
            {
                path:'ng-template',
                loadComponent:() => import('./pages/ng-template/ng-template/ng-template.component').then((m) => m.NgTemplateComponent)
            },
            {
                path:'ng-container',
                loadComponent:() => import('./pages/ng-container/ng-container.component').then((m) => m.NgContainerComponent)
            },
            {
                path:'ng-content-child',
                loadComponent:() => import('./pages/ng-content-child/ng-content-child.component').then((m) => m.NgContentChildComponent)
            }
        ]
    }
];
