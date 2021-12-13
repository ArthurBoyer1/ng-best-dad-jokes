import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  post?: Post;

  isLoading: boolean = false
  constructor(private route: ActivatedRoute,private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getDataService.getData().subscribe(res => {
      this.posts = res
      this.post = this.posts.find((post) => post.id === +this.route.snapshot.params['id']);
      this.isLoading = false;
    })
  }
}
