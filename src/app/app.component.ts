import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  date = new Date().toLocaleString( 'en-US', { timeZone: 'Europe/Paris' });

  posts = [ {
    title: 'premier post',
    content: 'ceci est un post',
    loveIts: 3,
    created_at: this.date
  },
  {
    title: 'second post',
    content: 'ceci est mon second post',
    loveIts: -5,
    created_at: this.date
  },
  {
    title: 'encore un post',
    content: 'ceci est encore un post',
    loveIts: 0,
    created_at: this.date
  },
  ]


}
