import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {
    this.jokes = [
                    new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
                    new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony (Mascarpone)"),
                    new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
                ];
   }

  ngOnInit() {
  }

toggle(joke) {
joke.hide = !joke.hide;
}

}

