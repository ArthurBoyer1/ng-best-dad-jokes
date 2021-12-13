import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'currentJoke'
})
export class CurrentJokePipe implements PipeTransform {

  transform(items: Post[], id: Number): Post[] {
    
    return items.filter(i => i.id != id);
  }

}
