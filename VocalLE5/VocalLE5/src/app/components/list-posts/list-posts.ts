import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { ChangeDetectorRef } from '@angular/core';
import { TokenStorage } from '../../services/token-storage';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-list-posts',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.html',
  styleUrls: ['./list-posts.css'],
})
export class ListPosts implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.postService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data as Post[];
        this.cdr.detectChanges();
        console.log('Posts loaded:', this.posts);
      },
      error: (err) => {
        console.error('Failed to load posts:', err);
      },
    });
  }

  addPost(): void {
    this.router.navigate(['/add-post']);
  }

  logout(): void {
    this.tokenStorage.signout();
    this.router.navigate(['/login']);
  }
}
