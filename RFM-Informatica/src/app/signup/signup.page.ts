import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Importando o serviço de autenticação

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SignupPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await this.authService.signup(this.username, this.email, this.password);
      alert('Conta criada com sucesso!');
      console.log('Usuário registrado:', response);
      this.navCtrl.navigateBack('/login'); // Redirecionar para login após cadastro
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert(error || 'Erro ao criar conta. Tente novamente.');
    }

    form.resetForm();
  }

  goBack() {
    this.navCtrl.back();
  }
}
