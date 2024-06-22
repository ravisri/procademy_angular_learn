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
            }
        ]
    }
];
