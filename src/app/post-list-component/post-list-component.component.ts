import { Component, OnInit, Input } from '@angular/core';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }
  getContent() {
    return this.content;
  }
  getLoveIts() {
    return this.loveIts;
  }
  getCreationDate() {
    return this.created_at;
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }
  likeIt() {
    this.loveIts++;
  }

  dislikeIt() {
    this.loveIts--;
  }


}
