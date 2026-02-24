import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { httpResource } from '@angular/common/http';
import { API_KEY } from '../../constants';

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
  imports: [
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
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

  public formatDistance(km: string): string {
    return parseFloat(km).toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatVelocity(kmh: string): string {
    return parseFloat(kmh).toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatDiameter(min: number, max: number): string {
    const avg = ((min + max) / 2) * 1000;
    return avg.toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatLunar(lunar: string): string {
    return parseFloat(lunar).toFixed(1);
  }
}
