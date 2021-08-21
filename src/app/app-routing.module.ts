import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
 { path: 'policy', loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'Newemployee', loadChildren: () => import('./newemployee/newemployee.module').then(m => m.NewemployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
