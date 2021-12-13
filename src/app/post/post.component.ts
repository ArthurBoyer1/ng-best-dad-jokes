import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!: Number;
  isLoading: boolean = false
  constructor(private route: ActivatedRoute, private getDataService: GetDataService, private router: Router) { }
  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.getDataService.getData().subscribe(res => {
        this.posts = res
        this.post = this.posts.find((post) => post.id === params['id']);
        this.id = params['id'];
        this.isLoading = false;
      });
    })
  }

  

  changeJoke(id: Number) {
    this.router.navigate(['/post'], { queryParams: { id: id } })
  }
}
