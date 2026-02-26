import { Injectable, signal } from '@angular/core';

@Injectable()
export class ThemeService {
  public readonly currentTheme = signal<'light' | 'dark'>('light');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme();
  }

  toggleTheme() {
    const newTheme = this.getTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
