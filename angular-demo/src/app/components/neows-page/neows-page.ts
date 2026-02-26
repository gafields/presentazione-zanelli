import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';
import { AsteroidInfo } from './asteroide/asteroide';
import { PageHeader } from '../page-header/page-header';
import { NeoObject } from '../../types/neo-object.model';
import { FormsModule } from '@angular/forms';

export type NeoWsResponse = {
  element_count: number;
  near_earth_objects: Record<string, NeoObject[]>;
};

@Component({
  selector: 'app-neows-page',
  imports: [MatIconModule, MatProgressSpinnerModule, AsteroidInfo, PageHeader, FormsModule],
  templateUrl: './neows-page.html',
  styleUrl: './neows-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeowsPage {
  public readonly today = new Date().toISOString().split('T')[0];
  public date$ = signal(this.today);

  public request = httpResource<NeoWsResponse>(
    () =>
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.date$()}&end_date=${this.date$()}&api_key=${API_KEY}`,
  );

  public isLoading = this.request.isLoading;

  public asteroids = computed(() => {
    const data = this.request.value();
    if (!data) return [];
    return Object.values(data.near_earth_objects).flat();
  });

  public hazardousCount = computed(
    () => this.asteroids().filter((a) => a.is_potentially_hazardous_asteroid).length,
  );

  public onDateChanged(newDate: string) {
    this.date$.set(newDate);
  }
}
