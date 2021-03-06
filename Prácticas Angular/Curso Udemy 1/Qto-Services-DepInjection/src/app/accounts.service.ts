import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class AccountsService{
	accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  //Inyectar logging en accountservice
  constructor(private loggingService: LoggingService){
  }

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChance(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChance(status);
  }
}