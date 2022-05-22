import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  public accounts: Account[];
  public transactions: Transaction[];

  public accountSelected: string;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(accounts => {
      this.accounts = accounts as Account[];
    });
  }

  selectAccount(account: Account) {
    this.accountSelected = account.number;
    this.accountsService.getTransactions(account.number).subscribe(transactions => {
      this.transactions = transactions as Transaction[];
    });
  }



}
