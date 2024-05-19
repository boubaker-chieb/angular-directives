import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DirectivesModule } from './directives/directives.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DirectivesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-directives';

  loading = true;

  menu = [
    {
      label: 'Home',
      link: '#home'
    },
    {
      label: 'Blog',
      link: '#blog'
    },
    {
      label: 'About',
      link: '#about'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => (this.loading = false), 3000);
  }
}
