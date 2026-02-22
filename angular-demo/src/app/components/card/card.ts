import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  public icon = input.required<string>();
  public cardTitle = input.required<string>();
  public cardSubtitle = input.required<string>();
  public cardText = input.required<string>();
  public cardLink = input.required<string>();
  public cardLinkName = input.required<string>();
}
