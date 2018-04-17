import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

setup: string;
punchline: string;
hide:boolean;

  constructor(setup: string, punchline: string) { 
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  ngOnInit() {
  }

toggle() {
this.hide = !this.hide;
}

}
