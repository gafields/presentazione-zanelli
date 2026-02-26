import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NeoObject } from '../../../types/neo-object.model';

@Component({
  selector: 'app-asteroid-info',
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './asteroide.html',
  styleUrl: './asteroide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsteroidInfo {
  public asteroid = input.required<NeoObject>();

  // Questo approccio si chiama mapping, e serve a trasformare i dati così come arrivano dall'API in un formato più comodo da usare nella view.
  // In questo modo, la logica di formattazione è tutta in un posto, e la view può essere più semplice.

  // Nota: Angular utilizza primitive reattive chiamate signals, e il mapping è implementato come una signal computata. In questo modo, ogni volta che i dati dell'asteroide cambiano, il mapping viene ricalcolato automaticamente, e la view si aggiorna di conseguenza.

  // Decommnta e utilizza questo oggetto per mappare i dati dell'asteroide in un formato più comodo per la view
  // Mostra le distanze in km e in miglia, il diametro medio in km e in miglia, la data di avvicinamento, la velocità in km/h e in mph, e se è potenzialmente pericoloso o no.

  // public asteroidMapped = computed(() => {
  //   const asteroid = this.asteroid();
  //   return {
  //     name: asteroid.name,
  //     isHazardous: asteroid.is_potentially_hazardous_asteroid,
  //     approachDate: asteroid.close_approach_data[0].close_approach_date,
  //     diameterMeters: this.formatDiameter(
  //       asteroid.estimated_diameter.kilometers.estimated_diameter_min,
  //       asteroid.estimated_diameter.kilometers.estimated_diameter_max,
  //     ),
  //     distanceKm: this.formatDistance(asteroid.close_approach_data[0].miss_distance.kilometers),
  //     distanceMiles: this.formatDistance(asteroid.close_approach_data[0].miss_distance.miles),
  //     velocityKmH: this.formatVelocity(
  //       asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour,
  //     ),
  //     velocityMilesH: this.formatVelocity(
  //       asteroid.close_approach_data[0].relative_velocity.miles_per_hour,
  //     ),
  //     lunar: this.formatLunar(asteroid.close_approach_data[0].miss_distance.lunar),
  //   };
  // });

  // Questi metodi servono a formattare i dati in modo più leggibile. Ad esempio, la distanza in km viene formattata con le migliaia di separazione, e il diametro viene calcolato come media tra il minimo e il massimo.
  // Tuttavia non devono essere usati direttamente nella view, ma solo all'interno del mapping, in modo da mantenere la view più pulita possibile.
  // Rendi questi metodi privati, in modo da indicare che non devono essere usati al di fuori della classe.
  // E utilizza al loro posto il computed signal per mostrare i dati formattati nella view.

  public formatDistance(km: string): string {
    return parseFloat(km).toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatVelocity(kmh: string): string {
    return parseFloat(kmh).toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatDiameter(kmMin: number, kmMax: number): string {
    const avg = ((kmMin + kmMax) / 2) * 1000;
    return avg.toLocaleString('it-IT', { maximumFractionDigits: 0 });
  }

  public formatLunar(lunar: string): string {
    return parseFloat(lunar).toFixed(1);
  }
}
