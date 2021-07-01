import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { DefaultNavComponent } from './components/nav-bar/default-nav/default-nav.component';
import { BranchesComponent } from './components/branches/branches.component';
import { BranchItemComponent } from './components/branch-item/branch-item.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { SwiftComponent } from './views/swift/swift.component';
import { ActionNavComponent } from './components/nav-bar/action-nav/action-nav.component';
import { AddBranchComponent } from './views/add-branch/add-branch.component';
import { AddTransactionComponent } from './views/add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DefaultNavComponent,
    BranchesComponent,
    BranchItemComponent,
    TransactionsComponent,
    TransactionItemComponent,
    SwiftComponent,
    ActionNavComponent,
    AddBranchComponent,
    AddTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // new
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
