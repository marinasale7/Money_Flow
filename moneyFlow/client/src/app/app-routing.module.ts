import { SignupComponent } from './views/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { SwiftComponent } from './views/swift/swift.component';
import { AddBranchComponent } from './views/add-branch/add-branch.component';
import { AddTransactionComponent } from './views/add-transaction/add-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'swift',
    component: SwiftComponent
  },
  {
    path: 'add-branch',
    component: AddBranchComponent
  },
  {
    path: 'add-transaction',
    component: AddTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
