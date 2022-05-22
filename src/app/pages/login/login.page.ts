import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private USER_INCORRECT_MESSAGE = 'El usuario o la clave son incorrectos, por favor intente nuevamente.';

  public loginForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  public submitForm() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user: User = {
      user: this.loginForm.value.user,
      password: this.loginForm.value.password
    }
    this.authService.login(user).subscribe((res) => {
      // res.subscribe();
      this.router.navigateByUrl('/tabs/accounts', { replaceUrl: true });
    },
      (err) => {
        console.log('login err', err);
        this.showErrorAlert(this.USER_INCORRECT_MESSAGE);
      });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  private showErrorAlert(message: string) {
    this.alertController.create({
      header: 'Ingreso fallido',
      message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }

}
