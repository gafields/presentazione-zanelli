import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';
import { AsteroidInfo } from './asteroide/asteroide';
import { PageHeader } from '../page-header/page-header';

export type CloseApproachData = {
  close_approach_date: string;
  relative_velocity: { kilometers_per_hour: string };
  miss_distance: { kilometers: string; lunar: string };
  orbiting_body: string;
};

export type NeoObject = {
  id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: { estimated_diameter_min: number; estimated_diameter_max: number };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
};

export type NeoWsResponse = {
  element_count: number;
  near_earth_objects: Record<string, NeoObject[]>;
};

@Component({
  selector: 'app-neows-page',
  imports: [MatIconModule, MatProgressSpinnerModule, AsteroidInfo, PageHeader],
  templateUrl: './neows-page.html',
  styleUrl: './neows-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeowsPage {
  private readonly today = new Date().toISOString().split('T')[0];

  public request = httpResource<NeoWsResponse>(
    () =>
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.today}&end_date=${this.today}&api_key=${API_KEY}`,
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
}
