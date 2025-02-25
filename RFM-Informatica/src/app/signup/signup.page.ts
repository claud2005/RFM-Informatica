import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // Importando NavController

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SignupPage {
  // Propriedades para armazenar os dados do formulário
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController) {} // Injetando NavController

  // Método para enviar o formulário
  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Formulário enviado com sucesso!');
    console.log('Usuário:', this.username);
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    // Resetar os campos do formulário
    form.resetForm();
  }

  // Método para voltar para a página anterior
  goBack() {
    this.navCtrl.back();
  }
}
