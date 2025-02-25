import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Importando o IonicModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,  // Componente standalone
  imports: [CommonModule, FormsModule, IonicModule]  // Adicionando o IonicModule
})
export class SignupPage {
  // Propriedades para armazenar os dados do formulário
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Método para enviar o formulário
  onSubmit(form: NgForm) {
    // Verifica se o formulário é válido
    if (form.valid) {
      if (this.password !== this.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }

      // Aqui você pode enviar os dados para o servidor
      console.log('Formulário enviado!');
      console.log('Usuário:', this.username);
      console.log('Email:', this.email);
      console.log('Senha:', this.password);

      // Resetar o formulário após envio
      form.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
