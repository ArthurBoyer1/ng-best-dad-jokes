import { Component, OnInit } from '@angular/core';
// import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = [];
  isLoading : boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getDataService.getData().subscribe(res => {
      this.posts = res;
      this.isLoading = false;
    })
  }

}
