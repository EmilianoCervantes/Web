import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //Le indica a angular que necesitamos una instancia de este servicio
  constructor(private loggingService: LoggingService,
              private accountService: AccountService){
    this.accountService.statusUpdated. subscribe(
      (status: string) => alert('Nuevo estado: '+ status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}