import { Component, input, output } from '@angular/core';
import { AnimeColumn } from '../../types';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
@Component({
  selector: 'app-anime-column',
  standalone: true,
  imports: [AnimeCardComponent],
  templateUrl: './anime-column.component.html',
})
export class AnimeColumnComponent {
  animeColumn = input.required<AnimeColumn>();

  scrolledToBottom = output<string>();

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const reachedBottom = Math.abs(
      element.scrollHeight - element.clientHeight - element.scrollTop
    ) < 1;

    if (reachedBottom) {
      this.scrolledToBottom.emit(this.animeColumn().type);
    }
  }
}
