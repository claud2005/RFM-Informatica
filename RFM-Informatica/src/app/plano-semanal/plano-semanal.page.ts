import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plano-semanal',
  templateUrl: './plano-semanal.page.html',
  styleUrls: ['./plano-semanal.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule] 
})
export class PlanoSemanalPage {
  selectedRange: string = ''; 
  selectedDate: string = '';  

  navigateTo(route: string) {
    console.log('Navegando para', route);
    // Aqui voce pode adicionar o roteamento correto, exemplo:
    // this.router.navigate([route]);
  }
}
