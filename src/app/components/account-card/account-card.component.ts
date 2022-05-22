import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;
  @Input() selected: string;

  public accountNumber: string;
  public accountType: string;
  public balance: number;

  constructor() { }

  ngOnInit() {
    this.accountNumber = this.account.number;
    this.accountType = this.account.type == 'savings' ? 'Cuenta de ahorro' : 'Cuenta corriente';
    this.balance = this.account.balance;
  }



}
