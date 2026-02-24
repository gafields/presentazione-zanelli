import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NeoObject } from '../neows-page';

@Component({
  selector: 'app-asteroide',
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './asteroide.html',
  styleUrl: './asteroide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Asteroide {
  public asteroid = input.required<NeoObject>();

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
