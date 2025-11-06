import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post';
import { Post } from '../../models/post.model';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css'],
})
export class PostDetail implements OnInit {
  post?: Post;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Post ID from route:', id);

    if (id) {
      this.postService.getPostDetails(id)
        .pipe(
          timeout(10000),
          catchError((err) => {
            console.error('HTTP Error:', err);
            this.error = true;
            this.cdr.detectChanges();
            return of(null);
          })
        )
        .subscribe({
          next: (data: any) => {
            if (data) {
              this.post = data as Post;
              this.cdr.detectChanges();
              console.log('Post data received:', this.post);
            } else {
              this.error = true;
              this.cdr.detectChanges();
            }
          },
          error: (err) => {
            console.error('Subscribe error:', err);
            this.error = true;
            this.cdr.detectChanges();
          },
        });
    } else {
      console.error('No post ID found in route');
      this.error = true;
      this.cdr.detectChanges();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
