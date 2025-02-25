import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Importado para Navegação

@Component({
  selector: 'app-plano-semanal',
  templateUrl: './plano-semanal.page.html',
  styleUrls: ['./plano-semanal.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class PlanoSemanalPage {
  selectedRange: number = 7;
  selectedDate: string = new Date().toISOString();
  tasks: any[] = [];

  constructor(private router: Router) { // ✅ Injetado o Router no construtor
    this.updateSchedule();
  }

  updateSchedule() {
    const today = new Date();
    this.tasks = [];

    for (let i = 0; i < this.selectedRange; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      this.tasks.push({
        date: date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }),
        time: '14:00',
        name: `Tarefa ${i + 1}`
      });
    }
  }

  onRangeChange() {
    this.updateSchedule();
  }

  // ✅ Corrigido para navegar corretamente
  navigateTo(route: string) {
    this.router.navigateByUrl(`/${route}`);
  }
}
