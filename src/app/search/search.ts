import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SynonymsService } from '../synonyms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
  animations: [
    trigger('pop', [
      state('void', style({ transform: 'scale(0)' })),
      transition('void => *', [animate('300ms ease-out')])
    ])
  ]
})
export class Search {
  word = '';
  newSynonym = '';
  synonyms: string[] = [];

  constructor(private svc: SynonymsService) {}

  search() {
    const q = this.word.trim();
    if (!q) return;
    this.svc.getSynonyms(q).subscribe(list => {
      this.synonyms = list;
    });
  }

  add() {
    const word = this.word.trim();
    const syn = this.newSynonym.trim();
    if (!word || !syn || syn === word) return;

    this.svc.addSynonym(word, syn).subscribe(() => {
      this.newSynonym = '';
      this.search();
    });
  }

  private rand(): number {
    return Math.random() * 200 - 100;
  }
}