import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-card',
  imports: [CommonModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
@Input() imageUrl!: string;
  @Input() title!: string;
  @Input() titleColor: string = '#000000';
  @Input() subtitle!: string;
  @Input() points!: string;
  @Input() pointsColor: string = '#000000';
}
