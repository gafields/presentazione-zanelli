import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './apod-page.html',
  styleUrl: './apod-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodPage {
  public date = new Date().toISOString().split('T')[0];

  public date$ = signal(this.date);

  public request = httpResource<ApodResponse>(
    () => `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${this.date$()}`,
  );

  public isLoading = this.request.isLoading;
  public data = this.request.value;

  public onDateChanged(e: unknown) {
    this.date$.set(this.date);
  }
}
