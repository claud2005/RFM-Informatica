import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
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
  selectedRange: number = 7; // Começa com 7 dias por padrão
  selectedDate: string = new Date().toISOString();  
  tasks: any[] = []; // ✅ Lista de tarefas

  constructor() {
    this.updateSchedule(); // Gera as tarefas ao iniciar
  }

  // ✅ Atualiza as tarefas com base no range selecionado
  updateSchedule() {
    const today = new Date();
    this.tasks = [];

    for (let i = 0; i < this.selectedRange; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      this.tasks.push({
        date: date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }),
        time: '14:00', // Exemplo fixo
        name: `Tarefa ${i + 1}`
      });
    }
  }

  // ✅ Atualiza as tarefas quando o usuário troca o range
  onRangeChange() {
    this.updateSchedule();
  }

  navigateTo(route: string) {
    console.log('Navegando para', route);
  }
}
