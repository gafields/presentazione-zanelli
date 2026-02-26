import { Component, computed, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-navigator',
  imports: [MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './date-navigator.html',
  styleUrl: './date-navigator.scss',
})
export class DateNavigator {
  public readonly dateChanged = output<string>();

  public readonly today = this.dateToIso(new Date());
  public readonly date = signal(this.today);
  public readonly nextDisabled = computed(() => this.date() >= this.today);

  public setDate(value: string) {
    this.date.set(value);
    this.dateChanged.emit(value);
  }

  public previousDay() {
    this.updateDate(-1);
  }

  public nextDay() {
    this.updateDate(1);
  }

  private updateDate(increment: number) {
    const currentDate = new Date(this.date());
    currentDate.setDate(currentDate.getDate() + increment);
    this.setDate(this.dateToIso(currentDate));
  }

  private dateToIso(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
