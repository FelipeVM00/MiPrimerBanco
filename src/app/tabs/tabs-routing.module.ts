import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'accounts',
        loadChildren: () => import('../pages/accounts/accounts.module').then(m => m.AccountsPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('../pages/qr/qr.module').then(m => m.QrPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('../pages/transactions/transactions.module').then(m => m.TransactionsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accounts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
