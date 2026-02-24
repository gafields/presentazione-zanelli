import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { API_KEY } from '../../constants';
import { httpResource } from '@angular/common/http';
import { PageHeader } from '../page-header/page-header';

export type RoverResponse = any; // Define the type based on the actual API response structure

@Component({
  selector: 'app-rover-page',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    PageHeader,
  ],
  templateUrl: './rover-page.html',
  styleUrl: './rover-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoverPage {
  public request = httpResource<RoverResponse>(
    () =>
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
  );

  public data = this.request.value;
}
