import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient, private storage: Storage) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('/assets/mocks/accounts.json').pipe(
      map((data: any) => data.accounts),
      switchMap((accounts: Account[]) => {
        return of(accounts.filter(async account => account.owner === await this.storage.get('user')));
      })
    );
  }

  getTransactions(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('/assets/mocks/transactions.json').pipe(
      map((data: any) => data.transactions),
      switchMap((transactions: Transaction[]) => {
        return of(transactions.filter(transaction => transaction.accountNumber === accountNumber));
      })
    );
  }

  async createNewAccount(account: any) {
    const accounts = await this.storage.get('accounts') || [];
    if (accounts.find(acc => acc.accountNumber === account.accountNumber)) {
      console.log('cuenta existente', accounts);
      return false;
    }
    console.log('accounts', accounts);
    await this.storage.set('accounts', [...accounts, account]);
    return true;
  }

}
