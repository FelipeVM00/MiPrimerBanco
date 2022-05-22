import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, find, switchMap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient, private storage: Storage) {
    this.isAuthenticated.next(false);
  }

  public login(user: User): Observable<any> {
    return this.http.get('assets/mocks/login.json').pipe(
      map((data: any) => data.users),
      switchMap(async users => {
        const userFind = users.find((u: any) => u.user === user.user && u.password === user.password);
        if (userFind) {
          this.isAuthenticated.next(true);
          await this.storage.set('user', user.user);
          return of('VALID');
        } else {
          this.isAuthenticated.next(false);
          return throwError('INVALID');
        }
      })
    );
  }
}
