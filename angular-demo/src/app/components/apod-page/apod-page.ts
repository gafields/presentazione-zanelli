import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PageHeader } from '../page-header/page-header';
import { MatProgressBarModule } from '@angular/material/progress-bar';

type ApodResponse = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

@Component({
  selector: 'app-apod-page',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    PageHeader,
    MatProgressBarModule,
  ],
  templateUrl: './apod-page.html',
  styleUrl: './apod-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodPage {
  public readonly today = this.getToday();
  public dateModel = this.getToday();
  public date$ = signal(this.dateModel);

  public readonly nextDisabled = computed(() => this.date$() >= this.today);

  public request = httpResource<ApodResponse>(
    () => `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${this.date$()}`,
  );

  public isLoading = this.request.isLoading;
  public data = this.request.value;

  public onDateChanged(newDate: string) {
    this.date$.set(newDate);
  }

  public expand(url: string) {
    window.open(url, '_blank');
  }

  public getToday() {
    return this.dateToIso(new Date());
  }

  public previousDay() {
    const currentDate = new Date(this.date$());
    currentDate.setDate(currentDate.getDate() - 1);
    this.date$.set(this.dateToIso(currentDate));
    this.dateModel = this.dateToIso(currentDate);
  }

  public nextDay() {
    const currentDate = new Date(this.date$());
    currentDate.setDate(currentDate.getDate() + 1);
    this.date$.set(this.dateToIso(currentDate));
    this.dateModel = this.dateToIso(currentDate);
  }

  protected dateToIso(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
