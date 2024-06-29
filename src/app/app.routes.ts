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
            {path:'custom-directive',
                loadComponent:() => import('./pages/custom-attribute-directive/custom-attribute-directive.component').then((m) => m.CustomAttributeDirectiveComponent)
            },
            {path:'renderer2',
                loadComponent:() => import('./pages/renderer2/renderer2.component').then((m) => m.Renderer2Component)
            },
            {path:'two-way-binding',
                loadComponent:() => import('./pages/two-way-data-binding/two-way-data-binding.component').then((m) => m.TwoWayDataBindingComponent)
            },
            {
                path:'practice',
                loadComponent:() => import('./pages/life-cycle-hooks/life-cycle-hooks.component').then((m) => m.LifeCycleHooksComponent)
            },
            {
                path:'services',
                loadComponent:() => import('./pages/ServicesExamples/main/main.component').then((m) => m.MainComponent)
            },
            {
                path:'services2',
                loadComponent:() => import('./pages/ServicesExamples/main/admin/admin.component').then((m) => m.AdminComponent)
            }
        ]
    }
];
