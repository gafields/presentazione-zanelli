import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Card } from '../card/card';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, Card],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Welcome {}
