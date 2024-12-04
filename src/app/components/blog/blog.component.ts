import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  isMenuOpen = false;
  currentSlide = 0;
  blogPosts: BlogPost[] = [
    {
      title: 'What is Financial Management? A Complete Guide',
      author: 'John Doe',
      date: '04 November 2024',
      description: 'Do you want to learn how Financial Management can help you achieve your goals and objectives in the business world? Discover What is Financial Management in the business world. This blog explores the secrets of Financial Management. Gain insights into the principles and practices from budgeting to investment strategies.',
      image: 'assets/images/financial-management.jpg'
    },
    // Add more blog posts here
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.blogPosts.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.blogPosts.length) % this.blogPosts.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigateToBlogPost(title: string): void {
    // Implement navigation to individual blog post
    console.log(`Navigating to blog post: ${title}`);
  }
}
