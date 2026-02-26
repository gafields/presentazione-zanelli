import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';
import { PageHeader } from '../page-header/page-header';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DateNavigator } from '../date-navigator/date-navigator';

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
    PageHeader,
    MatProgressBarModule,
    DateNavigator,
  ],
  templateUrl: './apod-page.html',
  styleUrl: './apod-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodPage {
  public readonly date = signal(new Date().toISOString().split('T')[0]);

  public readonly request = httpResource<ApodResponse>(
    () => `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${this.date()}`,
  );

  public readonly isLoading = this.request.isLoading;
  public readonly data = this.request.value;

  public expand(url: string) {
    window.open(url, '_blank');
  }
}
