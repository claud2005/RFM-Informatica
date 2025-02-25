import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // URL do backend

  async signup(username: string, email: string, password: string) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/signup`,
        { username, email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, "Erro ao registrar!");
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, "Erro ao fazer login!");
    }
  }

  private handleError(error: any, defaultMessage: string) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Erro Axios:", error.response.data);
      throw new Error(error.response.data.message || defaultMessage);
    } else if (error instanceof Error) {
      console.error("Erro:", error.message);
      throw new Error(error.message || defaultMessage);
    } else {
      console.error("Erro desconhecido:", error);
      throw new Error(defaultMessage);
    }
  }
}
