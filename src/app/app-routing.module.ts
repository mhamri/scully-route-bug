import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then((m) => m.PrivacyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes /* , {
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    } */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
